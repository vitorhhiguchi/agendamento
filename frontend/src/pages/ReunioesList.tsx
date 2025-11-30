import { useEffect, useState } from "react";
import { toast } from "sonner"; // Usando o Toast igual ao SalasList
import { reunioesService } from "../services/reunioesService";
import type { Reuniao } from "../services/reunioesService";
import { salasService } from "../services/salasService";
import type { Sala } from "../services/salasService";
import { ReuniaoCard } from "../components/ReuniaoCard";
import { Modal } from "../components/Modal";

export function ReunioesList() {
  const [reunioes, setReunioes] = useState<Reuniao[]>([]);
  const [salas, setSalas] = useState<Sala[]>([]);
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Reuniao | null>(null);

  const [form, setForm] = useState({
    nomeAluno: "",
    inicio: "",
    fim: "",
    salaId: 0,
  });

  // Função auxiliar para formatar ISO (Banco) -> Input HTML
  const formatToLocalInput = (isoString: string) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    const offset = date.getTimezoneOffset() * 60000;
    const localDate = new Date(date.getTime() - offset);
    return localDate.toISOString().slice(0, 16);
  };

  function openCreateModal() {
    setEditing(null);
    setForm({
      nomeAluno: "",
      inicio: "",
      fim: "",
      salaId: salas[0]?.id ?? 0,
    });
    setModalOpen(true);
  }

  function openEditModal(r: Reuniao) {
    setEditing(r);
    setForm({
      nomeAluno: r.nomeAluno,
      inicio: formatToLocalInput(r.inicio),
      fim: formatToLocalInput(r.fim),
      salaId: r.salaId,
    });
    setModalOpen(true);
  }

  async function fetchData() {
    setLoading(true);
    try {
      const [reunioesRes, salasRes] = await Promise.all([
        reunioesService.getAll(),
        salasService.getAll(),
      ]);

      setSalas(salasRes.data);

      // --- LÓGICA DE ORDENAÇÃO IGUAL AO DASHBOARD ---
      const sortedReunioes = [...reunioesRes.data].sort((a, b) => {
        const aPassou = new Date(a.fim) < new Date();
        const bPassou = new Date(b.fim) < new Date();

        // 1. Prioridade: Quem não passou vem antes
        if (aPassou !== bPassou) {
          return aPassou ? 1 : -1;
        }
        
        // 2. Desempate: Ordena por horário de início
        return new Date(a.inicio).getTime() - new Date(b.inicio).getTime();
      });

      setReunioes(sortedReunioes);

    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      toast.error("Erro ao carregar dados. Verifique o backend.");
    } finally {
      setLoading(false);
    }
  }

  // AQUI ESTA A CORREÇÃO DO ERRO DO PRISMA E A PADRONIZAÇÃO VISUAL
  async function handleSubmit() {
    // 1. Validação
    if (!form.nomeAluno || !form.inicio || !form.fim || !form.salaId) {
      toast.warning("Preencha todos os campos corretamente.");
      return;
    }

    // 2. Preparar Payload (Converter para o formato que o Backend aceita)
    const payload = {
      nomeAluno: form.nomeAluno,
      // Converte "2025-12-02T14:20" -> "2025-12-02T14:20:00.000Z"
      inicio: new Date(form.inicio).toISOString(), 
      fim: new Date(form.fim).toISOString(),
      salaId: Number(form.salaId), // Garante que é numero
    };

    try {
      if (editing) {
        await reunioesService.update(editing.id, payload);
        toast.success("Reunião atualizada com sucesso!");
      } else {
        await reunioesService.create(payload);
        toast.success("Reunião agendada com sucesso!");
      }

      setModalOpen(false);
      fetchData();
    } catch (error: any) {
      console.error(error);
      // Tenta pegar a mensagem de erro específica do backend se houver
      const msg = error.response?.data?.message || "Erro ao salvar. Verifique conflitos de horário.";
      toast.error(msg);
    }
  }

  async function handleDelete(id: number) {
    toast.promise(reunioesService.delete(id), {
      loading: 'Cancelando reunião...',
      success: () => {
        fetchData();
        return 'Reunião cancelada!';
      },
      error: 'Erro ao cancelar reunião.',
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-4 flex flex-col gap-6">

      <div className="flex justify-between items-center">
        {/* Título com dark mode igual ao SalasList */}
        <h1 className="text-3xl font-bold dark:text-white">Reuniões</h1>

        {/* Botão azul padronizado */}
        <button
          onClick={openCreateModal}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition-colors"
        >
          Nova Reunião +
        </button>
      </div>

      {loading ? (
        // Skeleton loading igual ao SalasList
        <div className="animate-pulse flex space-x-4">
           <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      ) : reunioes.length === 0 ? (
        // Empty state padronizado
        <div className="text-center py-10">
            <p className="text-gray-500 text-xl">Nenhuma reunião agendada 📅</p>
            <p className="text-sm text-gray-400">Clique no botão acima para agendar.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reunioes.map((r) => (
            <ReuniaoCard
              key={r.id}
              reuniao={r}
              salaNome={salas.find((s) => s.id === r.salaId)?.nome}
              onEdit={() => openEditModal(r)}
              onDelete={() => handleDelete(r.id)}
            />
          ))}
        </div>
      )}

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editing ? "Editar Reunião" : "Nova Reunião"}
      >
        <div className="flex flex-col gap-4">

          <label className="flex flex-col gap-1 text-sm font-medium dark:text-gray-200">
            Nome do Aluno:
            <input
              value={form.nomeAluno}
              onChange={(e) => setForm({ ...form, nomeAluno: e.target.value })}
              className="p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: Vitor Silva"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium dark:text-gray-200">
            Início:
            <input
              type="datetime-local"
              value={form.inicio}
              onChange={(e) => setForm({ ...form, inicio: e.target.value })}
              className="p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium dark:text-gray-200">
            Fim:
            <input
              type="datetime-local"
              value={form.fim}
              onChange={(e) => setForm({ ...form, fim: e.target.value })}
              className="p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium dark:text-gray-200">
            Sala:
            <select
              value={form.salaId}
              onChange={(e) => setForm({ ...form, salaId: Number(e.target.value) })}
              className="p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
            >
              {salas.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.nome}
                </option>
              ))}
            </select>
          </label>

          <button
            onClick={handleSubmit}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            {editing ? "Salvar Alterações" : "Agendar Reunião"}
          </button>

        </div>
      </Modal>
    </div>
  );
}
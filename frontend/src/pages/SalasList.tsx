import { useEffect, useState } from "react";
import { toast } from "sonner"; // <--- Importamos o toast
import { salasService } from "../services/salasService";
import type { Sala } from "../services/salasService";
import { SalaCard } from "../components/SalaCard";
import { Modal } from "../components/Modal";

export function SalasList() {
  const [salas, setSalas] = useState<Sala[]>([]);
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingSala, setEditingSala] = useState<Sala | null>(null);

  const [form, setForm] = useState({
    nome: "",
    capacidade: 0,
  });

  // Função para carregar dados com tratamento de erro
  async function fetchSalas() {
    setLoading(true);
    try {
      const { data } = await salasService.getAll();
      setSalas(data);
    } catch (error) {
      console.error("Erro ao buscar salas:", error);
      toast.error("Erro ao carregar as salas. O backend está rodando?");
    } finally {
      setLoading(false);
    }
  }

  function openCreateModal() {
    setEditingSala(null);
    setForm({ nome: "", capacidade: 0 });
    setModalOpen(true);
  }

  function openEditModal(sala: Sala) {
    setEditingSala(sala);
    setForm({ nome: sala.nome, capacidade: sala.capacidade });
    setModalOpen(true);
  }

  // A LÓGICA DE SALVAR CORRIGIDA
  async function handleSubmit() {
    // Validação simples
    if (!form.nome || form.capacidade <= 0) {
      toast.warning("Preencha o nome e uma capacidade válida.");
      return;
    }

    try {
      if (editingSala) {
        await salasService.update(editingSala.id, form);
        toast.success("Sala atualizada com sucesso!");
      } else {
        await salasService.create(form);
        toast.success("Sala criada com sucesso!");
      }

      setModalOpen(false); // Fecha o modal
      fetchSalas(); // Recarrega a lista
    } catch (error) {
      console.error(error);
      toast.error("Erro ao salvar. Verifique o console.");
    }
  }

  async function handleDelete(id: number) {
    // Usando toast com promise (fica muito legal visualmente)
    toast.promise(salasService.delete(id), {
      loading: 'Excluindo...',
      success: () => {
        fetchSalas(); // Recarrega após excluir
        return 'Sala excluída com sucesso!';
      },
      error: 'Erro ao excluir sala.',
    });
  }

  useEffect(() => {
    fetchSalas();
  }, []);

  return (
    <div className="p-4 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold dark:text-white">Salas</h1>
        <button
          onClick={openCreateModal}
          className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition-colors"
        >
          Nova Sala +
        </button>
      </div>

      {loading ? (
        <div className="animate-pulse flex space-x-4">
           <div className="h-12 w-full bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      ) : salas.length === 0 ? (
        <div className="text-center py-10">
            <p className="text-gray-500 text-xl">Nenhuma sala encontrada 😢</p>
            <p className="text-sm text-gray-400">Crie a primeira clicando no botão acima.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {salas.map((sala) => (
            <SalaCard
              key={sala.id}
              sala={sala}
              onEdit={() => openEditModal(sala)}
              onDelete={() => handleDelete(sala.id)}
            />
          ))}
        </div>
      )}

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingSala ? "Editar Sala" : "Nova Sala"}
      >
        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-1 text-sm font-medium dark:text-gray-200">
            Nome da Sala:
            <input
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              className="p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: Laboratório 1"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-medium dark:text-gray-200">
            Capacidade:
            <input
              type="number"
              value={form.capacidade}
              onChange={(e) =>
                setForm({ ...form, capacidade: Number(e.target.value) })
              }
              className="p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <button
            onClick={handleSubmit}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            {editingSala ? "Salvar Alterações" : "Criar Sala"}
          </button>
        </div>
      </Modal>
    </div>
  );
}
import { useEffect, useState } from "react";
import { reunioesService } from "../services/reunioesService";
import type { Reuniao } from "../services/reunioesService";
import { salasService } from "../services/salasService";
import type { Sala } from "../services/salasService";

export function Dashboard() {
  const [stats, setStats] = useState({
    totalSalas: 0,
    reunioesHoje: 0,
    reunioesTotal: 0,
    ocupacao: 0
  });

  const [proximasReunioes, setProximasReunioes] = useState<Reuniao[]>([]);
  const [salas, setSalas] = useState<Sala[]>([]);

  const formatHora = (dataString: string) => {
    return new Date(dataString).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };

  // Função auxiliar para saber se a reunião já acabou
  const isPassada = (fimIso: string) => {
    return new Date(fimIso) < new Date();
  };

  useEffect(() => {
    async function loadDashboard() {
      try {
        const [salasRes, reunioesRes] = await Promise.all([
          salasService.getAll(),
          reunioesService.getAll()
        ]);

        const salasData = salasRes.data;
        const reunioesData = reunioesRes.data;

        setSalas(salasData);

        const hoje = new Date().toISOString().split('T')[0];
        const hojeCount = reunioesData.filter(r => r.inicio.startsWith(hoje)).length;

        // --- LÓGICA DE ORDENAÇÃO NO FRONTEND ---
        const sortedReunioes = [...reunioesData].sort((a, b) => {
          const aPassou = isPassada(a.fim);
          const bPassou = isPassada(b.fim);

          // 1. Se uma passou e a outra não, a que passou vai pro final
          if (aPassou !== bPassou) {
            return aPassou ? 1 : -1;
          }
          
          // 2. Se ambas são iguais (ambas futuras ou ambas passadas), ordena por data
          return new Date(a.inicio).getTime() - new Date(b.inicio).getTime();
        });

        // Pegamos as 3 primeiras (as passadas só aparecem se tiver pouca reunião futura)
        setProximasReunioes(sortedReunioes.slice(0, 3));

        setStats({
          totalSalas: salasData.length,
          reunioesHoje: hojeCount,
          reunioesTotal: reunioesData.length,
          ocupacao: salasData.length > 0 ? Math.round((reunioesData.length / (salasData.length * 5)) * 100) : 0
        });

      } catch (error) {
        console.error("Erro ao carregar dashboard", error);
      }
    }
    loadDashboard();
  }, []);

  return (
    <div className="flex flex-col gap-8">

      {/* Header Visual */}
      <div className="bg-blue-600 dark:bg-gray-800 p-6 rounded-xl shadow-lg flex items-center justify-between text-white relative overflow-hidden">
        <div className="z-10">
          <h1 className="text-3xl font-bold">Bem-vindo 👋</h1>
          <p className="text-blue-100 dark:text-gray-400 mt-1">Gerencie salas e reuniões de forma simples.</p>
        </div>
        <div className="hidden md:block absolute right-[-20px] top-[-20px] opacity-20 rotate-12">
           <svg width="180" height="180" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 2V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 2V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 10H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
        </div>
      </div>

      {/* Cards Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm">Total de Salas</h3>
          <p className="text-3xl font-bold mt-2 dark:text-white">{stats.totalSalas}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm">Reuniões Hoje</h3>
          <p className="text-3xl font-bold mt-2 dark:text-white">{stats.reunioesHoje}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm">Total Agendado</h3>
          <p className="text-3xl font-bold mt-2 dark:text-white">{stats.reunioesTotal}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm">Ocupação (Est.)</h3>
          <p className="text-3xl font-bold mt-2 dark:text-white">{stats.ocupacao}%</p>
        </div>
      </div>

      {/* Lista de Próximas Reuniões */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold mb-4 dark:text-white">Próximas Reuniões</h2>

        <div className="flex flex-col gap-3">
          {proximasReunioes.length === 0 ? (
             <p className="text-gray-500">Nenhuma reunião agendada.</p>
          ) : (
             proximasReunioes.map(r => {
               const nomeSala = salas.find(s => s.id === r.salaId)?.nome || "Sala removida";
               const jaPassou = isPassada(r.fim);

               return (
                 <div key={r.id} className={`flex justify-between items-center p-3 rounded-lg border-l-4 ${jaPassou ? 'border-red-500 bg-gray-50 dark:bg-gray-700/30 opacity-70' : 'border-green-500 bg-white dark:bg-gray-700 shadow-sm'}`}>
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        {/* A BOLINHA COLORIDA AQUI */}
                        <div className={`w-2 h-2 rounded-full ${jaPassou ? 'bg-red-500' : 'bg-green-500'}`}></div>
                        <span className="font-bold dark:text-gray-200">{r.nomeAluno}</span>
                      </div>
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase ml-4">
                        {nomeSala}
                      </span>
                    </div>
                    
                    <div className="text-right">
                       {/* HORÁRIO FORMATADO: INÍCIO - FIM */}
                       <span className="block text-sm font-mono text-gray-700 dark:text-gray-300">
                         {formatHora(r.inicio)} - {formatHora(r.fim)}
                       </span>
                       <span className="text-xs text-gray-400 dark:text-gray-500">
                         {new Date(r.inicio).toLocaleDateString()}
                       </span>
                    </div>
                 </div>
               );
             })
          )}
        </div>
      </div>
    </div>
  );
}
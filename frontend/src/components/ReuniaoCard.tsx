import type { Reuniao } from "../services/reunioesService";

interface ReuniaoCardProps {
  reuniao: Reuniao;
  salaNome?: string;
  onEdit: () => void;
  onDelete: () => void;
}

export function ReuniaoCard({ reuniao, salaNome, onEdit, onDelete }: ReuniaoCardProps) {
  
  // Verifica se já passou
  const isPassada = new Date(reuniao.fim) < new Date();

  const formatData = (isoString: string) => {
    return new Date(isoString).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className={`bg-white dark:bg-gray-800 shadow-md p-4 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col gap-3 hover:shadow-lg transition ${isPassada ? 'opacity-75' : ''}`}>
      
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-bold dark:text-white">{reuniao.nomeAluno}</h3>
        
        {/* A BOLINHA MÁGICA AQUI */}
        <span 
          title={isPassada ? "Reunião encerrada" : "Agendada"}
          className={`w-3 h-3 rounded-full mt-2 ${isPassada ? 'bg-red-500' : 'bg-green-500'}`}
        ></span>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300">
        Sala: <strong className="text-gray-900 dark:text-white">{salaNome}</strong>
      </p>

      <div className="flex flex-col gap-1 mt-1">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Início: <span className="font-medium text-gray-800 dark:text-gray-200">{formatData(reuniao.inicio)}</span>
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          Fim: <span className="font-medium text-gray-800 dark:text-gray-200">{formatData(reuniao.fim)}</span>
        </p>
      </div>

      <div className="flex gap-2 justify-end mt-3 border-t pt-3 dark:border-gray-700">
        <button
          onClick={onEdit}
          className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors"
        >
          Editar
        </button>

        <button
          onClick={onDelete}
          className="px-3 py-1 text-sm font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors"
        >
          Excluir
        </button>
      </div>

    </div>
  );
}
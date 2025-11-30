import type { Sala } from "../services/salasService";

interface SalaCardProps {
  sala: Sala;
  onEdit: () => void;
  onDelete: () => void;
}

export function SalaCard({ sala, onEdit, onDelete }: SalaCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md p-4 rounded-xl border border-gray-200 dark:border-gray-700 flex flex-col gap-3 hover:shadow-lg transition">
      
      {/* Cabeçalho alinhado */}
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-bold dark:text-white">{sala.nome}</h3>
        {/* Badge decorativa para padronizar o layout com o card de reuniões */}
        <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
          Sala
        </span>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400">
        Capacidade: <span className="font-medium text-gray-900 dark:text-white">{sala.capacidade} pessoas</span>
      </p>

      {/* Botões padronizados com o ReuniaoCard */}
      <div className="flex gap-2 justify-end mt-2 border-t pt-3 dark:border-gray-700">
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
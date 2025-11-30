import { NavLink } from "react-router-dom";

export function Sidebar() {
  // Função para gerar as classes do link
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `p-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
      isActive
        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" // Ativo (Fundo claro, texto azul)
        : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700/50" // Inativo
    }`;

  return (
    <aside className="w-64 min-h-screen bg-white dark:bg-gray-800 shadow-xl border-r border-gray-100 dark:border-gray-700 p-6 flex flex-col gap-8">
      
      <div className="flex items-center gap-2">
         {/* Ícone simples para o logo */}
         <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">A</div>
         <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
           Agenda
         </h1>
      </div>

      <nav className="flex flex-col gap-2">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>

        <NavLink to="/salas" className={linkClass}>
          Salas
        </NavLink>

        <NavLink to="/reunioes" className={linkClass}>
          Reuniões
        </NavLink>
      </nav>
    </aside>
  );
}
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

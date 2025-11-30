import { Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { Dashboard } from "./pages/Dashboard";
import { SalasList } from "./pages/SalasList";
import { ReunioesList } from "./pages/ReunioesList";
import { Toaster } from "sonner";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="salas" element={<SalasList />} />
          <Route path="reunioes" element={<ReunioesList />} />
        </Route>
      </Routes>
      
      <Toaster richColors position="top-right" />
    </>
  );
}

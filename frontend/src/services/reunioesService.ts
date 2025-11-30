import { api } from "./api";

export interface Reuniao {
  id: number;
  nomeAluno: string;
  inicio: string;   // ISO String (ex: 2025-11-29T10:00)
  fim: string;      // ISO String
  salaId: number;
}

export const reunioesService = {
  getAll: () => api.get<Reuniao[]>("/reunioes"),
  create: (data: Omit<Reuniao, "id">) => api.post("/reunioes", data),
  update: (id: number, data: Omit<Reuniao, "id">) =>
    api.patch(`/reunioes/${id}`, data),
  delete: (id: number) => api.delete(`/reunioes/${id}`),
};

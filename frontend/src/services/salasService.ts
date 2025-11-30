import { api } from "./api";

export interface Sala {
  id: number;
  nome: string;
  capacidade: number;
}

export const salasService = {
  getAll: () => api.get<Sala[]>("/salas"),
  create: (data: Omit<Sala, "id">) => api.post("/salas", data),
  update: (id: number, data: Omit<Sala, "id">) =>
    api.patch(`/salas/${id}`, data),
  delete: (id: number) => api.delete(`/salas/${id}`),
};

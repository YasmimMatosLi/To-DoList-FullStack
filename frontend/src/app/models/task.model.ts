export type StatusTask = 'PENDENTE' | 'ANDAMENTO' | 'CONCLUIDA';

export interface Task {
  id?: number;
  titulo: string;
  descricao: string;
  status: StatusTask;
  dataCriacao?: string;
  dataTermino?: string;
  listaId: number;
}
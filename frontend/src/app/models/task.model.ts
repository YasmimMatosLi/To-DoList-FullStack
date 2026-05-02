export type StatusTask = 'PENDENTE' | 'EM_ANDAMENTO' | 'CONCLUIDA';

export interface Task {
  id?: number;
  titulo: string;
  descricao: string;
  status: StatusTask;
  dataCriacao?: string;
  dataTermino?: string;
  listaId: number;
}
export type StatusTarefa = 'PENDENTE' | 'EM_ANDAMENTO' | 'CONCLUIDA';

export interface Task {
  id?: number;
  titulo: string;
  descricao: string;
  status: StatusTarefa;
  dataCriacao?: string;
  dataTermino?: string;
  listaId: number;
}
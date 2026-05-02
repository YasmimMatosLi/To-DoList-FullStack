import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { Task, StatusTask } from '../../models/task.model';
import { ListaService } from '../../services/lista.service';
import { TarefaService } from '../../services/task.service';
import { TaskCardComponent } from '../../components/task-card/task-card';
import { TaskFormComponent } from '../../components/task-form/task-form';

@Component({
  selector: 'app-lista-detail',
  standalone: true,
  imports: [CommonModule, TaskCardComponent, TaskFormComponent],
  templateUrl: './lista-detail.html',
  styleUrls: ['./lista-detail.css'],
})
export class ListaDetail implements OnInit {
  lista = signal<Lista | null>(null);
  tarefas = signal<Task[]>([]);
  loading = signal(false);
  showForm = signal(false);
  tarefaEmEdicao = signal<Task | null>(null);
  filtroStatus = signal<StatusTask | 'TODOS'>('TODOS');
  listaId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listaService: ListaService,
    private tarefaService: TarefaService
  ) {}

  ngOnInit() {
    this.listaId = Number(this.route.snapshot.paramMap.get('id'));
    this.carregarLista();
    this.carregarTarefas();
  }

  carregarLista() {
    this.listaService.getById(this.listaId).subscribe({
      next: (lista) => this.lista.set(lista),
      error: () => this.router.navigate(['/']),
    });
  }

  carregarTarefas() {
    this.loading.set(true);
    this.tarefaService.getByLista(this.listaId).subscribe({
      next: (data) => {
        this.tarefas.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  get tarefasFiltradas(): Task[] {
    const filtro = this.filtroStatus();
    if (filtro === 'TODOS') return this.tarefas();
    return this.tarefas().filter((t) => t.status === filtro);
  }

  get contadores() {
    const all = this.tarefas();
    return {
      total: all.length,
      pendente: all.filter((t) => t.status === 'PENDENTE').length,
      emAndamento: all.filter((t) => t.status === 'EM_ANDAMENTO').length,
      concluida: all.filter((t) => t.status === 'CONCLUIDA').length,
    };
  }

  setFiltro(filtro: StatusTask | 'TODOS') {
    this.filtroStatus.set(filtro);
  }

  abrirFormNova() {
    this.tarefaEmEdicao.set(null);
    this.showForm.set(true);
  }

  editarTarefa(tarefa: Task) {
    this.tarefaEmEdicao.set({ ...tarefa });
    this.showForm.set(true);
  }

  fecharForm() {
    this.showForm.set(false);
    this.tarefaEmEdicao.set(null);
  }

  salvarTarefa(tarefa: Task) {
    const payload = { ...tarefa, listaId: this.listaId };
    if (tarefa.id) {
      this.tarefaService.update(tarefa.id, payload).subscribe(() => {
        this.carregarTarefas();
        this.fecharForm();
      });
    } else {
      this.tarefaService.create(payload).subscribe(() => {
        this.carregarTarefas();
        this.fecharForm();
      });
    }
  }

  excluirTarefa(id: number) {
    if (confirm('Deseja remover esta tarefa?')) {
      this.tarefaService.delete(id).subscribe(() => this.carregarTarefas());
    }
  }

  alterarStatus(evento: { id: number; status: StatusTask }) {
    const tarefa = this.tarefas().find((t) => t.id === evento.id);
    if (!tarefa) return;
    this.tarefaService.update(evento.id, { ...tarefa, status: evento.status }).subscribe(() => {
      this.carregarTarefas();
    });
  }

  voltar() {
    this.router.navigate(['/']);
  }
}
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task, StatusTask } from '../../models/task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-card.html',
  styleUrls: ['./task-card.css'],
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() editar = new EventEmitter<Task>();
  @Output() excluir = new EventEmitter<number>();
  @Output() alterarStatus = new EventEmitter<{ id: number; status: StatusTask }>();

  statusOptions: { value: StatusTask; label: string }[] = [
    { value: 'PENDENTE', label: '⏳ Pendente' },
    { value: 'ANDAMENTO', label: '🔄 Em andamento' },
    { value: 'CONCLUIDA', label: '✅ Concluída' },
  ];

  onEditar(event: Event) { event.stopPropagation(); this.editar.emit(this.task); }
  onExcluir(event: Event) { event.stopPropagation(); this.excluir.emit(this.task.id!); }

  onStatusChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value as StatusTask;
    this.alterarStatus.emit({ id: this.task.id!, status: value });
  }

  get statusClass() {
    const map: Record<StatusTask, string> = {
      PENDENTE: 'pendente',
      ANDAMENTO: 'andamento',
      CONCLUIDA: 'concluida',
    };
    return map[this.task.status] ?? '';
  }

  formatarData(data?: string): string {
    if (!data) return '—';
    return new Date(data).toLocaleDateString('pt-BR');
  }
}
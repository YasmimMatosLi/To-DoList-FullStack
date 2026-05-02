import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task, StatusTask } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.css'],
})
export class TaskFormComponent implements OnInit {
  @Input() task: Task | null = null;
  @Input() listaId!: number;
  @Output() salvar = new EventEmitter<Task>();
  @Output() cancelar = new EventEmitter<void>();

  form: Task = {
    titulo: '',
    descricao: '',
    status: 'PENDENTE',
    dataTermino: '',
    listaId: 0,
  };

  statusOptions: { value: StatusTask; label: string }[] = [
    { value: 'PENDENTE', label: '⏳ Pendente' },
    { value: 'EM_ANDAMENTO', label: '🔄 Em andamento' },
    { value: 'CONCLUIDA', label: '✅ Concluída' },
  ];

  ngOnInit() {
    if (this.task) {
      this.form = {
        ...this.task,
        dataTermino: this.task.dataTermino
          ? this.task.dataTermino.substring(0, 10)
          : '',
      };
    } else {
      this.form.listaId = this.listaId;
    }
  }

  onSubmit() {
    if (!this.form.titulo.trim()) return;
    this.salvar.emit({ ...this.form, listaId: this.listaId });
  }

  get isEdicao() {
    return !!this.task?.id;
  }
}

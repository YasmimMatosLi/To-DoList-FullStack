import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-lista-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-form.html',
  styleUrls: ['./lista-form.css'],
})
export class ListaFormComponent implements OnInit {
  @Input() lista: Lista | null = null;
  @Output() salvar = new EventEmitter<Lista>();
  @Output() cancelar = new EventEmitter<void>();

  form: Lista = { titulo: '', descricao: '' };

  ngOnInit() {
    if (this.lista) {
      this.form = { ...this.lista };
    }
  }

  onSubmit() {
    if (!this.form.titulo.trim()) return;
    this.salvar.emit({ ...this.form });
  }

  get isEdicao() {
    return !!this.lista?.id;
  }
}

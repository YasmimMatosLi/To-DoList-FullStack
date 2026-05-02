import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-lista-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-card.html',
  styleUrls: ['./lista-card.css'],
})
export class ListaCardComponent {
  @Input() lista!: Lista;
  @Output() abrir = new EventEmitter<number>();
  @Output() editar = new EventEmitter<Lista>();
  @Output() excluir = new EventEmitter<number>();

  onAbrir() { this.abrir.emit(this.lista.id!); }
  onEditar(event: Event) { event.stopPropagation(); this.editar.emit(this.lista); }
  onExcluir(event: Event) { event.stopPropagation(); this.excluir.emit(this.lista.id!); }

  formatarData(data?: string): string {
    if (!data) return '';
    return new Date(data).toLocaleDateString('pt-BR');
  }
}

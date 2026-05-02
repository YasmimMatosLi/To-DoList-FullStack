import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { ListaService } from '../../services/lista.service';
import { ListaFormComponent } from '../../components/lista-form/lista-form';
import { ListaCardComponent } from '../../components/lista-card/lista-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ListaFormComponent, ListaCardComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements OnInit {
  listas = signal<Lista[]>([]);
  loading = signal(false);
  showForm = signal(false);
  listaEmEdicao = signal<Lista | null>(null);

  constructor(private listaService: ListaService, private router: Router) {}

  ngOnInit() {
    this.carregarListas();
  }

  carregarListas() {
    this.loading.set(true);
    this.listaService.getAll().subscribe({
      next: (data) => {
        this.listas.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false),
    });
  }

  abrirFormNova() {
    this.listaEmEdicao.set(null);
    this.showForm.set(true);
  }

  editarLista(lista: Lista) {
    this.listaEmEdicao.set({ ...lista });
    this.showForm.set(true);
  }

  fecharForm() {
    this.showForm.set(false);
    this.listaEmEdicao.set(null);
  }

  salvarLista(lista: Lista) {
    if (lista.id) {
      this.listaService.update(lista.id, lista).subscribe(() => {
        this.carregarListas();
        this.fecharForm();
      });
    } else {
      this.listaService.create(lista).subscribe(() => {
        this.carregarListas();
        this.fecharForm();
      });
    }
  }

  excluirLista(id: number) {
    if (confirm('Deseja remover esta lista? As tarefas vinculadas também serão removidas.')) {
      this.listaService.delete(id).subscribe(() => this.carregarListas());
    }
  }

  abrirLista(id: number) {
    this.router.navigate(['/lista', id]);
  }
}

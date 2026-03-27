import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export interface toDoItem{
  id: number;
  titulo: string;
  descricao: string;
  concluida: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  TodoList :toDoItem[] = [];
  newTask: string="";
}


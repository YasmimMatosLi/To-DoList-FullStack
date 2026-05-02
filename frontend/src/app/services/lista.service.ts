import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lista } from '../models/lista.model';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ListaService {
  private apiUrl = `${environment.apiUrl}/listas`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Lista[]> {
    return this.http.get<Lista[]>(this.apiUrl);
  }

  getById(id: number): Observable<Lista> {
    return this.http.get<Lista>(`${this.apiUrl}/${id}`);
  }

  create(lista: Lista): Observable<Lista> {
    return this.http.post<Lista>(this.apiUrl, lista);
  }

  update(id: number, lista: Lista): Observable<Lista> {
    return this.http.put<Lista>(`${this.apiUrl}/${id}`, lista);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
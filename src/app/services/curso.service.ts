import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Curso } from '../models/curso.model';

const API_URL = `${environment.apiUrl}/api/cursos`;

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private readonly http: HttpClient) { }

  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(API_URL);
  }

  getCursoById(id: string): Observable<Curso> {
    return this.http.get<Curso>(`${API_URL}/${id}`);
  }

  crearCurso(curso: any): Observable<Curso> {
    return this.http.post<Curso>(API_URL, curso);
  }

  actualizarCurso(id: string, curso: any): Observable<Curso> {
    return this.http.put<Curso>(`${API_URL}/${id}`, curso);
  }

  eliminarCurso(id: string): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`);
  }
}
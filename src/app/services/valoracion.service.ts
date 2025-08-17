// src/app/services/valoracion.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Update the path below if your environment file is in a different location
import { environment } from '../../environments/environment.prod';
import { Valoracion } from '../models/valoracion.model';

const API_URL = `${environment.apiUrl}/api/valoraciones`;

@Injectable({
  providedIn: 'root'
})
export class ValoracionService {

  constructor(private readonly http: HttpClient) { }

  /**
   * Dejar una valoración para un curso
   * @param cursoId ID del curso
   * @param calificacion Calificación (1-5)
   * @param comentario Comentario opcional
   */
  crearValoracion(cursoId: string, calificacion: number, comentario: string): Observable<Valoracion> {
    return this.http.post<Valoracion>(API_URL, { cursoId, calificacion, comentario });
  }

  /**
   * Obtener todas las valoraciones de un curso específico
   * @param cursoId ID del curso
   */
  getValoracionesPorCurso(cursoId: string): Observable<Valoracion[]> {
    return this.http.get<Valoracion[]>(`${API_URL}/curso/${cursoId}`);
  }
}
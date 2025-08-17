// src/app/services/inscripcion.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Inscripcion } from '../models/inscripcion.model';

const API_URL = `${environment.apiUrl}/api/inscripciones`;

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  constructor(private readonly http: HttpClient) { }

  /**
   * Inscribirse a un curso
   * @param cursoId ID del curso
   */
  inscribirse(cursoId: string): Observable<Inscripcion> {
    return this.http.post<Inscripcion>(`${API_URL}/inscribir`, { cursoId });
  }

  /**
   * Obtener todas las inscripciones del usuario autenticado
   */
  getMisInscripciones(): Observable<Inscripcion[]> {
    return this.http.get<Inscripcion[]>(API_URL);
  }

  /**
   * Marcar asistencia (solo maestro del curso)
   * @param inscripcionId ID de la inscripción
   * @param fecha Fecha de asistencia (opcional)
   */
  marcarAsistencia(inscripcionId: string, fecha?: string): Observable<any> {
    return this.http.post(`${API_URL}/asistencia/${inscripcionId}`, { fecha });
  }
}
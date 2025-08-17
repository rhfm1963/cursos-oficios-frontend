import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { Usuario } from '../models/usuario.model';

const API_URL = `${environment.apiUrl}/api/auth`;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }

  registrar(userData: any): Observable<any> {
    return this.http.post(`${API_URL}/register`, userData);
  }

  login(credentials: any): Observable<any> {
    return this.http.post(`${API_URL}/login`, credentials);
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('usuario');
  }

  setToken(token: string) {
    localStorage.setItem('authToken', token);
  }

  getToken() {
    return localStorage.getItem('authToken');
  }

  setUsuario(usuario: Usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  getUsuario(): Usuario | null {
    const usr = localStorage.getItem('usuario');
    return usr ? JSON.parse(usr) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  esMaestro(): boolean {
    const usr = this.getUsuario();
    return usr ? usr.rol === 'maestro' : false;
  }
}
// src/app/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private readonly authService: AuthService, private readonly router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const rolRequerido = route.data['rol'];
    const autenticado = this.authService.isLoggedIn();
    const usuario = this.authService.getUsuario();

    if (!autenticado) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: route.url } });
      return false;
    }

    if (rolRequerido && usuario?.rol !== rolRequerido) {
      this.router.navigate(['/cursos']);
      return false;
    }

    return true;
  }
}
import { Routes } from '@angular/router';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { ValoracionFormComponent } from './components/valoracion-form/valoracion-form.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'crear-curso',
    component: CrearCursoComponent,
    canActivate: [AuthGuard],
    data: { rol: 'maestro' }
  },
  {
    path: 'valorarcion-form/:id',
    component: ValoracionFormComponent,
    canActivate: [AuthGuard],
    data: { rol: 'estudiante' }
  }
];
export { routes as AppRoutingModule };

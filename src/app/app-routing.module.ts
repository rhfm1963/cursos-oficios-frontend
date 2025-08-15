import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'crear-curso',
    component: CrearCursoComponent,
    canActivate: [AuthGuard],
    data: { rol: 'maestro' }
  },
  {
    path: 'valorar/:id',
    component: ValoracionFormComponent,
    canActivate: [AuthGuard],
    data: { rol: 'estudiante' }
  }
];
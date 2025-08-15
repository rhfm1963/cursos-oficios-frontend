// src/app/components/valoracion-form/valoracion-form.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// Update the path below if your auth.service.ts is in a different location
import { AuthService } from '../../services/auth.service';
import { CursoService } from '../../services/curso.service';
import { ValoracionService } from '../../services/valoracion.service';
// Update the path below to the correct relative path if needed
import { Curso } from '../../models/curso.model';

@Component({
  selector: 'app-valoracion-form',
  templateUrl: './valoracion-form.component.html',
  styleUrls: ['./valoracion-form.component.css']
})
export class ValoracionFormComponent implements OnInit {
  curso!: Curso;
  calificacion = 5;
  comentario = '';
  enviado = false;
  cargando = false;
  error = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly cursoService: CursoService,
    private readonly valoracionService: ValoracionService,
    private readonly authService: AuthService
  ) { }

  ngOnInit(): void {
    const cursoId = this.route.snapshot.paramMap.get('id');
    if (!cursoId) {
      this.router.navigate(['/cursos']);
      return;
    }

    this.cursoService.getCursoById(cursoId).subscribe({
      next: (data) => this.curso = data,
      error: () => { this.router.navigate(['/cursos'], { queryParams: { error: 'curso-no-encontrado' } }); }
    });
  }

  onSubmit(): void {
    if (!this.comentario.trim()) {
      this.error = 'El comentario es obligatorio.';
      return;
    }

    this.cargando = true;
    this.error = '';

    this.valoracionService.crearValoracion(this.curso._id, this.calificacion, this.comentario).subscribe({
      next: () => {
        this.enviado = true;
        this.cargando = false;
        alert('¡Gracias por tu valoración! Ayuda a mejorar la comunidad.');
        setTimeout(() => this.router.navigate(['/cursos']), 2000);
      },
      error: (err) => {
        this.cargando = false;
        this.error = err.error?.msg || 'No se pudo enviar la valoración.';
      }
    });
  }
}
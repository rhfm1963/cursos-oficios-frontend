// src/app/components/inscripcion/inscripcion.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../../models/curso.model';
import { AuthService } from '../../services/auth.service';
import { InscripcionService } from '../../services/inscripcion.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {
  @Input() curso!: Curso;
  inscrito = false;
  cargando = false;
  error = '';

  constructor(
    private readonly inscripcionService: InscripcionService,
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Verificar si ya está inscrito (puede mejorarse con llamada a API de inscripciones)
    // Por ahora, se asume que no está inscrito
  }

  onInscribirse(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
      return;
    }

    if (this.authService.esMaestro()) {
      this.error = 'Solo los estudiantes pueden inscribirse.';
      return;
    }

    this.cargando = true;
    this.error = '';

    this.inscripcionService.inscribirse(this.curso._id).subscribe({
      next: () => {
        this.inscrito = true;
        this.cargando = false;
        alert('¡Te has inscrito exitosamente al taller!');
      },
      error: (err) => {
        this.cargando = false;
        this.error = err.error?.msg || 'No se pudo completar la inscripción.';
      }
    });
  }
}
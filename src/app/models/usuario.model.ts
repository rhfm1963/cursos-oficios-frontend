export interface Usuario {
  _id: string;
  nombre: string;
  email: string;
  rol: 'maestro' | 'estudiante';
  especialidad?: string;
  calificacionPromedio?: number;
}
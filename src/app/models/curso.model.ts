export interface Curso {
  _id: string;
  titulo: string;
  descripcion: string;
  fechaInicio: string;
  fechaFin: string;
  capacidad: number;
  maestro: Usuario;
  activo: boolean;
}
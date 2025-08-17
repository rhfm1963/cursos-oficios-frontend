export interface Inscripcion {
  _id: string;
  curso: string;
  estudiante: string;
  fechaInscripcion: string;
  asistencias: { fecha: string; presente: boolean }[];
}
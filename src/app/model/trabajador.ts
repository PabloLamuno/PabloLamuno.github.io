import { Multimedia } from "./multimedia";

export class Trabajador {
    ID: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    especialidad: string;
    fechaNacimiento: Date;
    trabajos: Multimedia[];

    constructor(ID: number, nombre: string, apellido: string, descripcion: string, especialidad: string, fechaNacimiento: Date, trabajos: Multimedia[]) {
        this.ID = ID;
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.especialidad = especialidad;
        this.fechaNacimiento = fechaNacimiento;
        this.trabajos = trabajos;
    }
}

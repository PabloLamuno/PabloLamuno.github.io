import { Trabajador } from "../model/trabajador";

export class MultimediaVista {
    nota: number;
    fechaAcabado: Date;
    ID: number;
    nombre: string;
    tipo: string;
    plataforma: string;
    genero: string;
    estado: string;
    trabajadores: Trabajador[];
    [key: string]: string | Date | number | Trabajador[];

    constructor(ID: number, nombre: string, tipo: string, plataforma: string, genero: string, estado: string, trabajadores: Trabajador[], nota: number, fechaAcabado: Date) {
        this.ID = ID;
        this.nombre = nombre;
        this.tipo = tipo;
        this.plataforma = plataforma;
        this.genero = genero;
        this.estado = estado;
        this.trabajadores = trabajadores;
        this.nota = nota;
        this.fechaAcabado = fechaAcabado;
    }
}

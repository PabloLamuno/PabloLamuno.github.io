import { Trabajador } from "./trabajador";

export class Multimedia {
    ID: number;
    nombre: string;
    tipo: string;
    plataforma: string;
    genero: string;
    estado: string;
    trabajadores: Trabajador[];
    [key: string]: string  | number | Trabajador[];

    constructor(ID: number, nombre: string, tipo: string, plataforma: string, genero: string, estado: string, trabajadores: Trabajador[]) {
        this.ID = ID;
        this.nombre = nombre;
        this.tipo = tipo;
        this.plataforma = plataforma;
        this.genero = genero;
        this.estado = estado;
        this.trabajadores = trabajadores;
    }
}

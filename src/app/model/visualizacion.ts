import { Multimedia } from "./multimedia";
import { Usuario } from "./usuario";

export class Visualizacion {
    ID: number;
    parte: number;
    nota: number;
    fechaAcabado: Date;
    visto: number;
    tipo: string;
    multimedia: Multimedia;
    usuario: Usuario;

    constructor(ID: number, parte: number, nota: number, fechaAcabado: Date, visto: number, tipo: string, multimedia: Multimedia, usuario: Usuario) {
        this.ID = ID;
        this.parte = parte;
        this.nota = nota;
        this.fechaAcabado = fechaAcabado;
        this.visto = visto;
        this.tipo = tipo;
        this.multimedia = multimedia;
        this.usuario = usuario;
    }
}

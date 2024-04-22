import { Multimedia } from "./multimedia";
import { Usuario } from "./usuario";

export class Recomendacion {
    ID: number;
    recomendador: Usuario;
    recomendado: Usuario;
    multimedia: Multimedia;

    constructor(ID: number, recomendador: Usuario, recomendado: Usuario, multimedia: Multimedia) {
        this.ID = ID;
        this.recomendador = recomendador;
        this.recomendado = recomendado;
        this.multimedia = multimedia;
    }
}

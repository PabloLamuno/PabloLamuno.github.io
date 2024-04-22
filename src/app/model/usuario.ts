import { Recomendacion } from "./recomendacion";
import { Visualizacion } from "./visualizacion";

export class Usuario {
    ID: number;
    nombre: string;
    apellido: string;
    nickname: string;
    email: string;
    fechaCreacionCuenta: Date;
    rol: string;
    telefono: number;
    recomendacionesEnviadas: Recomendacion[];
    recomendacionesRecibidas: Recomendacion[];
    visualizaciones: Visualizacion[];
    rutaImagen: string;
    nickInstagram: string;
    nickFacebook: string;
    nickTwitter: string;
    nickReddit: string;
    nickDiscord: string;
    nickGitHub: string;

    constructor(ID: number, nombre: string, apellido: string, nickname: string, email: string, fechaCreacionCuenta: Date, rol: string, recomendacionesEnviadas: Recomendacion[], recomendacionesRecibidas: Recomendacion[], visualizaciones: Visualizacion[], telefono: number, rutaImagen: string, nickInstagram: string, nickFacebook: string, nickTwitter: string, nickReddit: string, nickDiscord: string, nickGitHub: string) {
        this.ID = ID;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nickname = nickname;
        this.email = email;
        this.fechaCreacionCuenta = fechaCreacionCuenta;
        this.rol = rol;
        this.recomendacionesEnviadas = recomendacionesEnviadas;
        this.recomendacionesRecibidas = recomendacionesRecibidas;
        this.visualizaciones = visualizaciones;
        this.telefono = telefono;
        this.rutaImagen = rutaImagen;
        this.nickInstagram = nickInstagram;
        this.nickFacebook = nickFacebook;
        this.nickTwitter = nickTwitter;
        this.nickReddit = nickReddit;
        this.nickDiscord = nickDiscord;
        this.nickGitHub = nickGitHub;
    }

}

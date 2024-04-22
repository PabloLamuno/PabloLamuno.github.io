import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiComunicationService } from '../../services/api-comunication.service';
import { Usuario } from '../../model/usuario';

// Definir el tipo de las variables de visibilidad
type vVisi = {
   [key: string]: boolean;
  vInstagram: boolean;
  vFacebook: boolean;
  vTwitter: boolean;
  vReddit: boolean;
  vDiscord: boolean;
  vGitHub: boolean;
};

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {



  vVisi: vVisi = {
    vInstagram: false,
    vFacebook: false,
    vTwitter: false,
    vReddit: false,
    vDiscord: false,
    vGitHub: false,
  };


  usuario!: Usuario;

  constructor(private servicio: ApiComunicationService) {
   
  }

  ngOnInit() {
    this.getUsuario();
  }

  getUsuario() {
    console.log('Obteniendo usuario');
    this.servicio.getUsuario("qmalamos").subscribe(
      (response: Usuario) => {
        console.log('Usuario obtenido');
        this.usuario = response;
      }
    );
  }


  updateUsuario() {
    this.servicio.updateUsuario(this.usuario).subscribe(
      (response: Usuario) => {
        console.log('Usuario actualizado');
        this.usuario = response;

        // Mostrar el toast temporalmente
        const toast = document.getElementById('toast') as HTMLElement;
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 3000); // Ocultar el toast después de 3 segundos (ajusta el tiempo según tus preferencias)
      }
    );
  }

  async cambiarVisibilidad(nombreVariable: string,id:string) {
    console.log(nombreVariable);
        this.vVisi[nombreVariable] = !this.vVisi[nombreVariable];
        await new Promise(f => setTimeout(f, 10));
        document.getElementById(id)?.focus();
      }



}


import { Component, Input } from '@angular/core';
import { Multimedia } from '../../model/multimedia';
import { MultimediaVista } from '../../dto/multimedia-vista';
import { ApiComunicationService } from '../../services/api-comunication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vistas',
  templateUrl: './vistas.component.html',
  styleUrls: ['./vistas.component.css'],
})
export class VistasComponent {
  constructor(private servicio: ApiComunicationService) {}

  //Variables para la vista
  multimediasPuras: MultimediaVista[] = [];
  multimediasFiltradas: MultimediaVista[] | Multimedia[] = [];

  modo: string = 'vista';

  ngOnInit(): void {
    this.getMultimedias();
  }

  getMultimedias() {
    //Miramos el tiempo que tardo el metodo
    // console.time('getMultimedias');

    this.servicio.getVistas(1).subscribe((response: MultimediaVista[]) => {
      //Truncamos al segundo decimal en la nota
      response.forEach((vista: MultimediaVista) => {
        vista.nota = Math.round(vista.nota * 100) / 100;
        //Si no hacemos esto, la fecha no tendra el formato correcto
        vista.fechaAcabado = new Date(vista.fechaAcabado);
      });
      this.multimediasPuras = response.sort();
      this.multimediasFiltradas = this.multimediasPuras;
    });
    // console.timeEnd('getMultimedias');
  }

  verificarEstado(multimedia: Multimedia): string {
    let estado = multimedia.estado;
    if (estado.startsWith('Acabada')) return 'bg-success';
    else if (estado.startsWith('Continuara')) return 'continuara';
    else if (estado.startsWith('En Emision')) return 'bg-info';
    else if (estado.startsWith('Sin Acabar')) return 'bg-dark';
    else
      throw new Error(
        'Estado no reconocido ' + multimedia.nombre + ' - ' + multimedia.estado
      );
  }

  filtradoAcabado(filtradas: MultimediaVista[] | Multimedia[]) {
    console.log('Filtrando por acabado');
    console.log(filtradas);
    this.multimediasFiltradas = filtradas;
  }
}

import { Component, Input, SimpleChanges } from '@angular/core';
import { Multimedia } from '../../../model/multimedia';
import { MultimediaVista } from '../../../dto/multimedia-vista';

@Component({
  selector: 'app-list-multimedias',
  templateUrl: './list-multimedias.component.html',
  styleUrls: ['./list-multimedias.component.css'],
})
export class ListMultimediasComponent {
  @Input() multimedias!: MultimediaVista[] | Multimedia[];
  @Input() modo!: string;

  multimediasMultimedia: Multimedia[] = [];
  multimediasVista: MultimediaVista[] = [];

  primeraVez: boolean = true;
  verMultimedias: boolean = true;

  ngOnChanges(): void {
    if (this.multimedias.length > 0) {
      this.verMultimedias = this.modo === 'multimedia';
      if (this.verMultimedias) {
        this.multimediasMultimedia = this.multimedias as Multimedia[];
        this.primeraVez = false;
      } else if (!this.verMultimedias) {
        this.multimediasVista = this.multimedias as MultimediaVista[];
        this.primeraVez = false;
      }
    }
  }

  constructor() {}

  verificarEstado(multimedia: Multimedia | MultimediaVista): string {
    const estado = multimedia.estado;
    if (estado.startsWith('Acabada')) {
      return 'bg-success';
    } else if (estado.startsWith('Continuara')) {
      return 'continuara';
    } else if (estado.startsWith('En Emision')) {
      return 'bg-info';
    } else if (estado.startsWith('Sin Acabar')) {
      return 'bg-dark';
    } else {
      throw new Error(
        'Estado no reconocido ' + multimedia.nombre + ' - ' + multimedia.estado
      );
    }
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('es-ES');
  }
}

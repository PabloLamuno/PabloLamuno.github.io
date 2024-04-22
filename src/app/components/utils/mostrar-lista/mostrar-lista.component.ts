import { Component, Input, SimpleChanges } from '@angular/core';
import { Multimedia } from '../../../model/multimedia';
import { MultimediaVista } from '../../../dto/multimedia-vista';

@Component({
  selector: 'app-mostrar-lista',
  templateUrl: './mostrar-lista.component.html',
  styleUrl: './mostrar-lista.component.css'
})
export class MostrarListaComponent {

  @Input() multimediasPura!: MultimediaVista[] | Multimedia[];
  @Input() modo!: string;

  multimediasFiltradas: Multimedia[] | MultimediaVista[] = [];

  primeraVez: boolean = true;




  ngOnChanges(): void {
    
    if (this.multimediasPura.length > 0) {
      if (this.modo === 'vista') this.multimediasFiltradas = this.multimediasPura as MultimediaVista[];
      else if (this.modo === 'multimedia') this.multimediasFiltradas = this.multimediasPura as Multimedia[];
    }
  }

  filtradoAcabado(filtradas: MultimediaVista[] | Multimedia[]) {
    this.multimediasFiltradas = filtradas;
  }



}

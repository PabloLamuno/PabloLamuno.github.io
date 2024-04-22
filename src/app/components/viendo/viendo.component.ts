import { Component } from '@angular/core';
import { ApiComunicationService } from '../../services/api-comunication.service';
import { Multimedia } from '../../model/multimedia';

@Component({
  selector: 'app-viendo',
  templateUrl: './viendo.component.html',
  styleUrl: './viendo.component.css'
})
export class ViendoComponent {
  multimediasViendo: Multimedia[] = [];

  modo: string = 'multimedia';

  constructor(private servicio: ApiComunicationService) { }

  ngOnInit(): void {
    this.getMultimedias();
  }



  getMultimedias(): void {
    this.servicio.getViendo(1).subscribe(
      (response: Multimedia[]) => {
        this.multimediasViendo = response;
      }
    );
  }
}

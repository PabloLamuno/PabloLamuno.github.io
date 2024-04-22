import { Component } from '@angular/core';
import { Multimedia } from '../../model/multimedia';
import { ApiComunicationService } from '../../services/api-comunication.service';

@Component({
  selector: 'app-ver-mas-tarde',
  templateUrl: './ver-mas-tarde.component.html',
  styleUrl: './ver-mas-tarde.component.css'
})
export class VerMasTardeComponent {
  multimediasPorVer: Multimedia[] = [];
  modo: string = 'multimedia';

  constructor(private servicio: ApiComunicationService) { }

  ngOnInit(): void {
    this.getMultimedias();
  }



  getMultimedias(): void {
    this.servicio.getVerMasTarde(1).subscribe(
      (response: Multimedia[]) => {
        this.multimediasPorVer = response;
      }
    );
  }
}

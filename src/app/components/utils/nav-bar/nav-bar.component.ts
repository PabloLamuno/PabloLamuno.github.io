import { Component } from '@angular/core';
import { ApiComunicationService } from '../../../services/api-comunication.service';
import { UpdateData } from '../../../services/update-data';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private servicio: ApiComunicationService, private servicioConfig: UpdateData) { }

  reiniciarDatos() {
    console.log('Reiniciando datos');
    this.servicio.reiniciarDatos().subscribe(
      (response: boolean) => {
        console.log('Datos reiniciados');

      }
    );

  }


  actualizarUsados() {
    console.log('Actualizando datos');
    this.servicioConfig.updateMostUsed().subscribe(
      (response: boolean) => {
        console.log('Datos actualizados');
      }
    );
  }

}

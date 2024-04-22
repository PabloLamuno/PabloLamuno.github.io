import { Component } from '@angular/core';
import { Multimedia } from '../../model/multimedia';
import { ApiComunicationService } from '../../services/api-comunication.service';

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.component.html',
  styleUrl: './explorar.component.css',
})
export class ExplorarComponent {
  constructor(private servicio: ApiComunicationService) {}

  allMultimedias: Multimedia[] = [];
  modo: string = 'multimedia';

  ngOnInit(): void {
    this.getMultimedias();
  }

  getMultimedias(): void {
    this.servicio.getAllMultimedias().subscribe((response: Multimedia[]) => {
      this.allMultimedias = response;
    });
  }
}

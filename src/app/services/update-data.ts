import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateData {
  constructor(private http: HttpClient) {}

  //Configuracion
  updateMostUsed(): Observable<boolean> {
    return this.http.post<boolean>(
      'http://qmalamos.duckdns.org:8080/api/config/actualizarGenerosYPlataformas',
      null
    );
  }

  getPlataformas(): Observable<string> {
    return this.http.get(`assets/ficheros/infoApp.txt`, {
      responseType: 'text',
    });
  }
  getGeneros(): Observable<string> {
    return this.http.get(`assets/ficheros/infoApp.txt`, {
      responseType: 'text',
    });
  }
  getTipos(): Observable<string> {
    return this.http.get(`assets/ficheros/infoApp.txt`, {
      responseType: 'text',
    });
  }
}

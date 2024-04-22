import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Multimedia } from '../model/multimedia';
import { Usuario } from '../model/usuario';
import { MultimediaVista } from '../dto/multimedia-vista';

@Injectable({
  providedIn: 'root',
})
export class ApiComunicationService {
  constructor(private http: HttpClient) {}

  //Debug
  reiniciarDatos(): Observable<boolean> {
    return this.http.get<boolean>(
      'http://qmalamos.duckdns.org:8080/api/excel/cargarDatos'
    );
  }

  //Multimedia
  getAllMultimedias(): Observable<Multimedia[]> {
    return this.http.get<Multimedia[]>(
      'http://qmalamos.duckdns.org:8080/api/multimedias/full'
    );
  }

  getTipos(): Observable<string[]> {
    return this.http.get<string[]>(
      'http://qmalamos.duckdns.org:8080/api/multimedias/tipos'
    );
  }

  getGeneros(): Observable<string[]> {
    return this.http.get<string[]>(
      'http://qmalamos.duckdns.org:8080/api/multimedias/generos'
    );
  }
  getPlataformas(): Observable<string[]> {
    return this.http.get<string[]>(
      'http://qmalamos.duckdns.org:8080/api/multimedias/plataformas'
    );
  }

  //Usuario

  getUsuario(nickname: string): Observable<Usuario> {
    return this.http.get<Usuario>(
      'http://qmalamos.duckdns.org:8080/api/usuarios/nickname=' + nickname
    );
  }

  updateUsuario(usuario: Usuario) {
    return this.http.put<Usuario>(
      'http://qmalamos.duckdns.org:8080/api/usuarios/update',
      usuario
    );
  }

  getVistas(id: number): Observable<MultimediaVista[]> {
    return this.http.get<MultimediaVista[]>(
      'http://qmalamos.duckdns.org:8080/api/usuarios/historialMulti/' + id
    );
  }

  getVerMasTarde(id: number): Observable<Multimedia[]> {
    return this.http.get<Multimedia[]>(
      'http://qmalamos.duckdns.org:8080/api/usuarios/verMasTardeMulti/' + id
    );
  }

  getViendo(id: number): Observable<Multimedia[]> {
    return this.http.get<Multimedia[]>(
      'http://qmalamos.duckdns.org:8080/api/usuarios/viendoMulti/' + id
    );
  }
}

// trabajador.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trabajador } from '../models/trabajador';

@Injectable({
  providedIn: 'root',
})
export class TrabajadorService {
  private apiUrl = 'http://localhost:5085/api/Trabajador';

  constructor(private http: HttpClient) {}

  // Obtener todos los trabajadores
  getTrabajadores(): Observable<Trabajador[]> {
    return this.http.get<Trabajador[]>(this.apiUrl);
  }

  // Obtener un trabajador por su ID
  getTrabajadorById(id: number): Observable<Trabajador> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Trabajador>(url);
  }

  // Agregar un nuevo trabajador
  agregarTrabajador(trabajador: Trabajador): Observable<Trabajador> {
    return this.http.post<Trabajador>(this.apiUrl, trabajador);
  }

  // Actualizar información de un trabajador
  editarTrabajador(trabajador: Trabajador): Observable<Trabajador> {
    const url = `${this.apiUrl}/${trabajador.idTrabajador}`;
    return this.http.put<Trabajador>(url, trabajador);
  }

  // Eliminar un trabajador por su ID
  eliminarTrabajador(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}

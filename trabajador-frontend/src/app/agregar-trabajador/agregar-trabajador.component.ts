// agregar-trabajador.component.ts

import { Component } from '@angular/core';
import { TrabajadorService } from '../services/trabajador.service';
import { Trabajador } from '../models/trabajador';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-trabajador',
  templateUrl: './agregar-trabajador.component.html',
  styleUrls: ['./agregar-trabajador.component.css'], // Puedes crear un archivo CSS para estilos específicos
})
export class AgregarTrabajadorComponent {
  nuevoTrabajador: Trabajador = {
    idTrabajador: 0,
    nombre: '',
    apellidos: '',
    genero: '',
    fechaNac: '',
    numeroDocumento: '',
    direccion: '',
    telefono: '',
    email: '',
    acceso: '',
    usuario: '',
    clave: '',
  };

  constructor(private trabajadorService: TrabajadorService, private router: Router) {}

  guardarTrabajador() {
    this.trabajadorService.agregarTrabajador(this.nuevoTrabajador).subscribe(() => {
      // Trabajador agregado exitosamente, puedes realizar acciones adicionales si es necesario
      console.log('Trabajador agregado exitosamente');
      // Redirige a la lista de trabajadores después de agregar
      this.router.navigate(['/trabajadores']);
    });
  }
}

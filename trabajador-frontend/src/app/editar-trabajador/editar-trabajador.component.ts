// editar-trabajador.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trabajador } from '../models/trabajador';
import { TrabajadorService } from '../services/trabajador.service';

@Component({
  selector: 'app-editar-trabajador',
  templateUrl: './editar-trabajador.component.html',
  styleUrls: ['./editar-trabajador.component.css'], // Puedes crear un archivo CSS para estilos específicos
})
export class EditarTrabajadorComponent implements OnInit {
  trabajadorEditado: Trabajador = {
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

  constructor(
    private trabajadorService: TrabajadorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.obtenerTrabajador();
  }

  obtenerTrabajador() {
    const idFromRoute = this.route.snapshot.paramMap.get('id');
    
    // Verifica si el parámetro 'id' existe y es convertible a un número
    if (idFromRoute !== null && !isNaN(+idFromRoute)) {
      const id = +idFromRoute;
      
      this.trabajadorService.getTrabajadorById(id).subscribe(
        (trabajador) => {
          this.trabajadorEditado = trabajador;
        },
        (error) => {
          console.error(`Error al obtener el trabajador con ID ${id}:`, error);
          // Puedes manejar el error de acuerdo a tus necesidades
        }
      );
    } else {
      console.error('ID de trabajador no válido en la URL');
      // Puedes redirigir a una página de manejo de errores o tomar otras medidas apropiadas
    }
  }
  
  editarTrabajador() {
    this.trabajadorService.editarTrabajador(this.trabajadorEditado).subscribe(() => {
      // Trabajador editado exitosamente, puedes realizar acciones adicionales si es necesario
      console.log('Trabajador editado exitosamente');
      // Redirige a la lista de trabajadores después de editar
      this.router.navigate(['/trabajadores']);
    });
  }
}

// trabajadores-tabla.component.ts

import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../models/trabajador';
import { TrabajadorService } from '../services/trabajador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trabajadores-tabla',
  templateUrl: './trabajadores-tabla.component.html',
  styleUrls: ['./trabajadores-tabla.component.css'], // Puedes crear un archivo CSS para estilos específicos
})
export class TrabajadoresTablaComponent implements OnInit {
  trabajadores: Trabajador[] = [];
  columnas: string[] = ['idTrabajador', 'nombre', 'apellidos', 'acciones'];

  constructor(private trabajadorService: TrabajadorService, private router: Router) {}

  ngOnInit() {
    this.obtenerTrabajadores();
  }

  obtenerTrabajadores() {
    this.trabajadorService.getTrabajadores().subscribe((trabajadores) => {
      this.trabajadores = trabajadores;
    });
  }

  editarTrabajador(id: number) {
    this.router.navigate(['/editar-trabajador', id]);
  }

  eliminarTrabajador(id: number) {
    if (confirm('¿Estás seguro de eliminar este trabajador?')) {
      this.trabajadorService.eliminarTrabajador(id).subscribe(() => {
        // Trabajador eliminado exitosamente, puedes realizar acciones adicionales si es necesario
        console.log('Trabajador eliminado exitosamente');
        // Actualiza la lista de trabajadores después de eliminar
        this.obtenerTrabajadores();
      });
    }
  }
}

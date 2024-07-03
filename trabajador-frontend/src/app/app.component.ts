// src/app/app.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trabajador-frontend';

  constructor(private router: Router) { }

  // Función para navegar a la página de agregar trabajador
  irAFormularioAgregar(): void {
    this.router.navigate(['/agregar-trabajador']);
  }
}

// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrabajadoresTablaComponent } from './trabajadores-tabla/trabajadores-tabla.component';
import { AgregarTrabajadorComponent } from './agregar-trabajador/agregar-trabajador.component';
import { EditarTrabajadorComponent } from './editar-trabajador/editar-trabajador.component';
import { EliminarTrabajadorComponent } from './eliminar-trabajador/eliminar-trabajador.component';

const routes: Routes = [
  { path: 'trabajadores', component: TrabajadoresTablaComponent },
 { path: 'agregar-trabajador', component: AgregarTrabajadorComponent },
  { path: 'editar-trabajador/:id', component: EditarTrabajadorComponent },
  { path: 'eliminar-trabajador/:id', component: EliminarTrabajadorComponent },
  // Agrega más rutas según sea necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrabajadoresTablaComponent } from './trabajadores-tabla/trabajadores-tabla.component';
import { AgregarTrabajadorComponent } from './agregar-trabajador/agregar-trabajador.component';
import { EditarTrabajadorComponent } from './editar-trabajador/editar-trabajador.component';
import { EliminarTrabajadorComponent } from './eliminar-trabajador/eliminar-trabajador.component';
import { HeaderComponent } from './header/header.component';
// Importa los módulos de Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrabajadoresTablaComponent,
    AgregarTrabajadorComponent,
    EditarTrabajadorComponent,
    EliminarTrabajadorComponent,
    
  ],
  imports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    // Importa los módulos de Angular Material
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

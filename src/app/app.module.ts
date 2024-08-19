import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SuscripcionComponent } from './pages/suscripcion/suscripcion.component';
import { CancelacionComponent } from './pages/cancelacion/cancelacion.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { FondoComponent } from './pages/fondo/fondo.component';
import { TransaccionComponent } from './pages/transaccion/transaccion.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SuscripcionComponent,
    CancelacionComponent,
    ClienteComponent,
    FondoComponent,
    TransaccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

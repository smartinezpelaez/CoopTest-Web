import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component'
import { ClienteComponent } from './pages/cliente/cliente.component';
import { FondoComponent } from './pages/fondo/fondo.component';
import { TransaccionComponent } from './pages/transaccion/transaccion.component';
import { SuscripcionComponent } from './pages/suscripcion/suscripcion.component';
import { CancelacionComponent } from './pages/cancelacion/cancelacion.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'suscripcion', component: SuscripcionComponent },
  { path: 'cancelacion', component: CancelacionComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'fondos', component: FondoComponent },
  { path: 'transacciones', component: TransaccionComponent },
  { path: '', redirectTo: '/suscripcion', pathMatch: 'full' },
  { path: '**', redirectTo: '/suscripcion' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

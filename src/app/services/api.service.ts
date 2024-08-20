import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteDTO } from '../models/cliente.model';
import { FondoDTO } from '../models/fondo.model';
import { TransaccionDTO } from '../models/transaccion.model';
import { SuscripcionFondoDTO } from '../models/suscripcioFondoDTO';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://localhost:7122/api';

  constructor(private http: HttpClient) {}

  // Métodos para Cliente
  crearCliente(cliente: ClienteDTO): Observable<ClienteDTO> {
    return this.http.post<ClienteDTO>(`${this.apiUrl}/cliente/crear-cliente`, cliente);
  }

  suscribirCliente(suscripcion: SuscripcionFondoDTO): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cliente/suscribir-cliente`, suscripcion);
  }

  cancelarSuscripcion(clienteId: string, fondoId: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cliente/${clienteId}/fondos/${fondoId}/cancelar`, {});
  }

  obtenerFondos(): Observable<FondoDTO[]> {
    return this.http.get<FondoDTO[]>(`${this.apiUrl}/fondo`);
  }

  obtenerTransacciones(clienteId: string): Observable<TransaccionDTO[]> {
    return this.http.get<TransaccionDTO[]>(`${this.apiUrl}/transaccion/${clienteId}`);
  }
}

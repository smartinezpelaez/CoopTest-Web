import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ClienteDTO {
  id: string;
  nombre: string;
  saldo: number;
}

interface SuscripcionFondoDTO {
  clienteId: string;
  fondoId: string;
}

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiUrl = 'https://localhost:7122/api/Cliente/crear-cliente';  // Cambia la URL base según tu configuración

  constructor(private http: HttpClient) {}

  crearCliente(cliente: ClienteDTO): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear-cliente`, cliente);
  }

  suscribirCliente(suscripcion: SuscripcionFondoDTO): Observable<any> {
    return this.http.post(`${this.apiUrl}/suscribir-cliente`, suscripcion);
  }

  cancelarSuscripcion(clienteId: string, fondoId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${clienteId}/fondos/${fondoId}/cancelar`, {});
  }

  obtenerFondos(): Observable<any> {
    return this.http.get('https://localhost:7122/api/Fondo');
  }

  obtenerTransacciones(clienteId: string): Observable<any> {
    return this.http.get(`https://localhost:7122/api/Transaccion/${clienteId}`);
  }
}

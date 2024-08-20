import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ClienteDTO } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  cliente: ClienteDTO = { id: '', nombre: '', saldo: 500000 };
  mensajeExito: string | null = null;
  mensajeError: string | null = null;
  errores: { id?: string; nombre?: string } = {};

  constructor(private apiService: ApiService) { }

  crearCliente(): void {
    // Resetear errores
    this.errores = {};
    this.mensajeExito = null;
    this.mensajeError = null;

    // Validar campos
    if (!this.cliente.id) {
      this.errores.id = 'El ID del cliente es obligatorio.';
    }
    if (!this.cliente.nombre) {
      this.errores.nombre = 'El nombre del cliente es obligatorio.';
    }

    // Si hay errores, no enviar la solicitud
    if (Object.keys(this.errores).length > 0) {
      return;
    }

    // Enviar solicitud para crear el cliente
    this.apiService.crearCliente(this.cliente).subscribe({
      next: (response) => {
        this.mensajeExito = 'Cliente creado con éxito';
        this.mensajeError = null;

        // Limpiar el formulario
        this.cliente = { id: '', nombre: '', saldo: 500000 };

        console.log('Cliente creado con éxito', response);
      },
      error: (error) => {
        this.mensajeError = 'Error al crear el cliente';
        this.mensajeExito = null;

        console.error('Error al crear el cliente', error);
      }
    });
  }
}

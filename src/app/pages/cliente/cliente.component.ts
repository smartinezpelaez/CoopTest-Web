import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ClienteDTO } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
  cliente: ClienteDTO = { saldo: 500000 };

  constructor(private apiService: ApiService) { }

  crearCliente(): void {
    this.apiService.crearCliente(this.cliente).subscribe({
      next: (response) => {
        console.log('Cliente creado con éxito', response);
      },
      error: (error) => {
        console.error('Error al crear el cliente', error);
      }
    });
  }
}

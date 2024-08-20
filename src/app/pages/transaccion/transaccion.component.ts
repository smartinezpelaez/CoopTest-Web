import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { TransaccionDTO } from 'src/app/models/transaccion.model';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {
  transacciones: TransaccionDTO[] = [];
  clienteId: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {}

  verTransacciones(): void {
    if (this.clienteId) {
      this.apiService.obtenerTransacciones(this.clienteId).subscribe({
        next: (data) => {
          this.transacciones = data;
        },
        error: (err) => {
          console.error('Error al cargar las transacciones', err);
        }
      });
    } else {
      console.warn('Debe ingresar un ID de cliente.');
    }
  }
}

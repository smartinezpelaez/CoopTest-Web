import { Component } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cancelacion',
  templateUrl: './cancelacion.component.html',
  styleUrls: ['./cancelacion.component.css']
})
export class CancelacionComponent {
  cancelacionForm: FormGroup;

  constructor(private clienteService: ClienteService, private fb: FormBuilder) {
    this.cancelacionForm = this.fb.group({
      clienteId: ['', Validators.required],
      fondoId: ['', Validators.required],
    });
  }

  cancelar(): void {
    if (this.cancelacionForm.valid) {
      const { clienteId, fondoId } = this.cancelacionForm.value;
      this.clienteService.cancelarSuscripcion(clienteId, fondoId).subscribe({
        next: () => {
          alert('Cancelación exitosa');
        },
        error: (err) => {
          alert('Error al cancelar la suscripción');
        }
      });
    }
  }
}

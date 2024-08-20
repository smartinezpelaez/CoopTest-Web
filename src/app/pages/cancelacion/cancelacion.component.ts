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
  mensajeExito: string | null = null;
  mensajeError: string | null = null;

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
          this.mensajeExito = 'Cancelación exitosa';
          this.mensajeError = null;

          // Limpiar el formulario después de la cancelación exitosa
          this.cancelacionForm.reset();
        },
        error: () => {
          this.mensajeError = 'Error al cancelar la suscripción';
          this.mensajeExito = null;
        }
      });
    } else {
      this.mensajeError = 'Por favor, complete todos los campos requeridos.';
      this.mensajeExito = null;
    }
  }
}

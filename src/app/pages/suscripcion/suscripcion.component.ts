import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css']
})
export class SuscripcionComponent implements OnInit {
  suscripcionForm: FormGroup;
  fondos: any[] = [];
  mensajeError: string | null = null;
  mensajeExito: string | null = null;

  constructor(private clienteService: ClienteService, private fb: FormBuilder) {
    this.suscripcionForm = this.fb.group({
      clienteId: ['', Validators.required],
      fondoId: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.clienteService.obtenerFondos().subscribe(data => {
      this.fondos = data;
    });
  }

  suscribir(): void {
    if (this.suscripcionForm.valid) {
      this.clienteService.suscribirCliente(this.suscripcionForm.value).subscribe({
        next: () => {
          this.mensajeExito = 'Suscripción exitosa';
          this.mensajeError = null;

          // Limpiar el formulario después de la suscripción exitosa
          this.suscripcionForm.reset();
        },
        error: () => {
          this.mensajeError = `No tiene saldo disponible para vincularse al fondo ${this.getFondoNombre()}`;
          this.mensajeExito = null;
        }
      });
    } else {
      this.mensajeError = 'Por favor, complete todos los campos requeridos.';
      this.mensajeExito = null;
    }
  }

  private getFondoNombre(): string {
    const fondoId = this.suscripcionForm.get('fondoId')?.value;
    const fondo = this.fondos.find(f => f.id === fondoId);
    return fondo ? fondo.nombre : '';
  }
}

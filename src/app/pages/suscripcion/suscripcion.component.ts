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
  mensajeError: string = '';

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
          alert('Suscripción exitosa');
        },
        error: (err) => {
          this.mensajeError = `No tiene saldo disponible para vincularse al fondo ${this.getFondoNombre()}`;
        }
      });
    }
  }

  private getFondoNombre(): string {
    const fondoId = this.suscripcionForm.get('fondoId')?.value;
    const fondo = this.fondos.find(f => f.id === fondoId);
    return fondo ? fondo.nombre : '';
  }
}

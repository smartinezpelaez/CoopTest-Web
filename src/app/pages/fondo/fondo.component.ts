import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FondoDTO } from 'src/app/models/fondo.model';

@Component({
  selector: 'app-fondo',
  templateUrl: './fondo.component.html',
  styleUrls: ['./fondo.component.css']
})
export class FondoComponent implements OnInit {
  fondos: FondoDTO[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getFondos().subscribe({
      next: (data) => {
        this.fondos = data;
      },
      error: (err) => {
        console.error('Error al cargar los fondos', err);
      }
    });
  }
}

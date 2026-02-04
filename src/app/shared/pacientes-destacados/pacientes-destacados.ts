import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pacientes-destacados',
  imports: [FormsModule, CommonModule],
  templateUrl: './pacientes-destacados.html',
  styleUrl: './pacientes-destacados.css',
})
export class PacientesDestacados {

  // Para probar ngModel
  nombreFiltro: string = '';

  // Datos para probar ngClass y ngStyle
  pacientes = [
    { nombre: 'Ramón', especie: 'Perro', urgencia: 'alta', recuperacion: 85 },
    { nombre: 'Michi', especie: 'Gato', urgencia: 'baja', recuperacion: 40 },
    { nombre: 'Luna', especie: 'Conejo', urgencia: 'media', recuperacion: 10 }
  ];

}

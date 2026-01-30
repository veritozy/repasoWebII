import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-mascotas',
  imports: [],
  templateUrl: './lista-mascotas.html',
  styleUrl: './lista-mascotas.css',
})
export class ListaMascotas {
  titulo: string = "Panel de Control - Pacientes VIP";

  pacientes = [
    { nombre: 'Max', especie: 'Perro', raza: 'Beagle', foto: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400', enConsulta: false, urgencia: false },
    { nombre: 'Mora', especie: 'Gato', raza: 'Siamés', foto: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?w=400', enConsulta: false, urgencia: false },
    { nombre: 'Pipo', especie: 'Ave', raza: 'Canario', foto: 'https://images.unsplash.com/photo-1522926193917-29690d8355af?w=400', enConsulta: false, urgencia: false },
    { nombre: 'Luna', especie: 'Perro', raza: 'Husky', foto: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400', enConsulta: false, urgencia: true }
  ];

  atenderPaciente(nombre: string) {
    alert(`📢 Llamando al paciente ${nombre} al consultorio.`);
  }
}


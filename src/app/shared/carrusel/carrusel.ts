import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-carrusel',
  imports: [CommonModule, CarouselModule],
  templateUrl: './carrusel.html',
  styleUrl: './carrusel.css',
})
export class Carrusel {


  contenidoCarrusel = [
  {
    titulo: 'Nuestra Clínica',
    descripcion: 'Instalaciones modernas y seguras para tus mascotas.',
    url: 'https://www.superpet.pe/blog/wp-content/uploads/2021/08/Golden-Retriever-La-gui%CC%81a-completa-de-esta-raza-1-750x450.jpg'
  },
  {
    titulo: 'Equipo Profesional',
    descripcion: 'Veterinarios especializados y comprometidos.',
    url: 'https://www.dogpackapp.com/blog/wp-content/uploads/2025/02/goldador-dog-standing-on-beach.webp'
  },
  {
    titulo: 'Tecnología Avanzada',
    descripcion: 'Equipos de diagnóstico de última generación.',
    url: 'https://www.westminsterkennelclub.org/wp-content/uploads/2025/07/golden_retriever-scaled-1-1024x681.jpg'
  }
];

}

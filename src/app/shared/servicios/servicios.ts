import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styleUrl: './servicios.css',
})
export class Servicios {
  // Para Interpolación en el encabezado
  subtitulo = "Cuidamos a los que más quieres con servicios de alta calidad";
  
  // Variable para Event Binding (mostrar cuál servicio está seleccionado)
  servicioSeleccionado: string = 'Ninguno';

  servicios = [
    { 
      id: 1, 
      nombre: 'Consulta General', 
      descripcion: 'Evaluación completa de salud, peso y signos vitales.', 
      imagen: 'https://purina.com.ec/sites/default/files/2022-10/purina-consulta-veterinaria-para-mascotas-lo-que-debes-saber.jpg', 
      activo: true 
    },
    { 
      id: 2, 
      nombre: 'Laboratorio Clínico', 
      descripcion: 'Análisis de sangre y pruebas rápidas de diagnóstico.', 
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxew3BKeoHSYRsB5_M5q-J0VCQhvspDVGNw&s', 
      activo: true 
    },
    { 
      id: 3, 
      nombre: 'Cirugía y Quirófano', 
      descripcion: 'Procedimientos con anestesia inhalatoria y monitoreo.', 
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQucllF97MLPaXRHd4qpzzoDYR1AWJxXiQiRQ&s', 
      activo: false // Digamos que está en remodelación
    }
  ];

  // Event Binding: Solo para informar al usuario qué seleccionó
  seleccionar(nombre: string) {
    this.servicioSeleccionado = nombre;
  }

}

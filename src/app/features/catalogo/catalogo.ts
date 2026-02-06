import { Component } from '@angular/core';
import { DetalleMascota } from '../../shared/detalle-mascota/detalle-mascota';
import { Mascota } from '../../models/mascota';

@Component({
  selector: 'app-catalogo',
  imports: [DetalleMascota],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class Catalogo {

 mascotas = [
    { id: 1, nombre: 'Firulais', especie: 'Perro', historial: 'Vacunas al día' },
    { id: 2, nombre: 'Michi', especie: 'Gato', historial: 'Requiere desparasitación' },
    { id: 3, nombre: 'Pipo', especie: 'Ave', historial: 'Ala recuperada' }
  ];

 // Define una variable que puede guardar un objeto Mascota o estar vacía (null) al iniciar.
// Usamos el pipe (|) para permitir ambos tipos y evitar errores de TypeScript.
mascotaSeleccionada: Mascota | null = null;

// Variable de tipo texto (string) que almacenará el mensaje enviado desde el componente hijo.
// Se inicializa como una cadena vacía para que no aparezca nada en el HTML al principio.
mensajeAviso: string = '';

// Función que se ejecuta cuando el usuario hace clic en una mascota de la lista.
// Recibe como parámetro un objeto de tipo Mascota (el que recibió el clic).
verDetalles(mascota: Mascota) {
  // Asigna la mascota recibida a la variable 'mascotaSeleccionada'. 
  // Esto activa el @if en el HTML y "pasa" los datos al componente hijo mediante el @Input.
  this.mascotaSeleccionada = mascota;
}

// Función encargada de escuchar el evento personalizado (@Output) que viene del hijo.
// El parámetro 'mensaje' contiene el texto (string) que el hijo envió mediante el .emit().
procesarAviso(mensaje: string) {
  // Guarda el texto recibido en la variable 'mensajeAviso' para mostrarlo en la alerta del HTML.
  this.mensajeAviso = mensaje;
}

}

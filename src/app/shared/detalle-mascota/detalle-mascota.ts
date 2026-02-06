import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from '../../models/mascota';

@Component({
  selector: 'app-detalle-mascota',
  imports: [],
  templateUrl: './detalle-mascota.html',
  styleUrl: './detalle-mascota.css',
})
export class DetalleMascota {
  // Decorador que permite recibir datos desde el componente padre.
  // El signo '?' indica que la mascota es opcional (podría ser undefined si el padre no envía nada).
  @Input() mascota?: Mascota;

  // Decorador que crea un "emisor de eventos" para enviar información de vuelta al padre.
  // Usamos EventEmitter<string> porque el mensaje que vamos a enviar es un texto.
  @Output() notificarAccion = new EventEmitter<string>();

  // Método que se activa al hacer clic en el botón del componente hijo.
  // Usamos ': void' para indicar que esta función realiza una acción pero no devuelve ningún valor.
  avisarIngreso(): void {
    // Verificamos si existe una mascota (si no es undefined).
    // Esto es obligatorio en TypeScript para poder acceder de forma segura a las propiedades.
    if (this.mascota) {
      // .emit() es la función que lanza el "grito" hacia el componente padre.
      // Usamos backticks (``) para insertar dinámicamente el nombre del paciente en el mensaje.
      this.notificarAccion.emit(
        `El paciente ${this.mascota.nombre} ha sido llamado al consultorio.`,
      );
    }
  }
}

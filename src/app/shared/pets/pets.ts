import { Component, inject, signal } from '@angular/core';
import { PetService } from '../../services/pet-service';
import { Pet } from '../../models/pet';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pets',
  imports: [CommonModule],
  templateUrl: './pets.html',
  styleUrl: './pets.css',
})
export class Pets {

  private petService = inject(PetService);
  //Un signal es una variable “reactiva” que Angular puede vigilar automáticamente.
//Cada vez que cambias su valor, Angular sabe que debe actualizar el HTML o cualquier parte del código que lo use.
//Es como un array normal o variable normal, pero “inteligente”: Angular se entera cuando cambias algo.

  mascotas = signal<Pet[]>([]);
//gOnInit es un método del ciclo de vida del componente.
//Angular lo llama automáticamente cuando el componente se inicializa.
//Ideal para hacer peticiones a APIs y cargar datos.
  ngOnInit() {
  this.petService.getPets().subscribe(datos => {//me suscribo al observable y ejecuto esta función cuando los datos llegan”.
    this.mascotas.set(datos.data);//datos.data → es el array de mascotas que vino de la API.
    //this.mascotas.set(...) → asigna ese array al signal.
  });

}
 // Función que se ejecuta al hacer click
  adoptarMascota() {
    alert('¡Gracias por elegirme! 🐶');
  }
}

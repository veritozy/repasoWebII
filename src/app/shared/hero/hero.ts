import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroHome {

  // Estos son los "huecos" que rellenaremos desde fuera
  @Input() titulo!: string;
  @Input() resaltado!: string;
  @Input() descripcion!: string;
  @Input() imagenUrl!: string;
  @Input() textoBoton!: string;
  @Input() colorFondo!: string;
}

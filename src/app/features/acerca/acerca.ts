import { Component } from '@angular/core';
import { HeroHome } from '../../shared/hero/hero';
import { Carrusel } from "../../shared/carrusel/carrusel";

@Component({
  selector: 'app-acerca',
  imports: [HeroHome, Carrusel],
  templateUrl: './acerca.html',
  styleUrl: './acerca.css',
})
export class Acerca {

}

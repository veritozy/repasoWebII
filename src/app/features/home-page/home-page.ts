import { Component } from '@angular/core';
import { HeroHome } from "../../shared/hero-home/hero-home";
import { Servicios } from "../../shared/servicios/servicios";
import { PacientesDestacados } from "../../shared/pacientes-destacados/pacientes-destacados";

@Component({
  selector: 'app-home-page',
  imports: [HeroHome, Servicios, PacientesDestacados],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}

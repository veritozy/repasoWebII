import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./shared/nav-bar/nav-bar";
import { HomePage } from "./features/home-page/home-page";
import { Acerca } from "./features/acerca/acerca";

@Component({
  selector: 'app-root',
  imports: [NavBar, HomePage, Acerca, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('veterinaria');
}

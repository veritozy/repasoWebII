import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

   email = '';
  password = '';

public servicioAuth = inject(AuthService);
private router = inject(Router); // Para navegar tras el login

  login() {
    this.servicioAuth.login(this.email, this.password).subscribe(success => {
      if (success) {
        alert('¡Bienvenido al sistema! Acceso concedido.');
        this.router.navigate(['/usuarios']); // <--- Te manda al CRUD automáticamente
      } else {
        alert('Error: Usuario o contraseña incorrectos. Revisa tus datos.');
      }
    });
  }



}

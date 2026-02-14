import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';

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

  login() {
    this.servicioAuth.login(this.email, this.password);
    alert('Bienvenido al sistema! ');
  }

  logout() {
    this.servicioAuth.logout();
  }

}

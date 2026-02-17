import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const authGuard: CanActivateFn = (route, state) => {
 const servicioAuth = inject(AuthService);
 const router = inject(Router);

  // En Angular 21, leer una señal es tan simple como ejecutarla: authService.isLoggedIn()
  if (servicioAuth.isLoggedIn()) {
    return true; 
  }

  // Si no está logueado, redirigimos usando la nueva API de navegación
  return router.parseUrl('/login'); 

};

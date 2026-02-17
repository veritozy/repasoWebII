import { inject, Injectable, signal } from '@angular/core';
import { Usuario } from '../models/usuario';
import { getAuth, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { UsuariosService } from './usuarios-service';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

private usuarioService = inject(UsuariosService);
// 1. Declaramos una 'señal' reactiva que indica si el usuario está logueado.
// Revisamos el localStorage: si el valor de 'sesion' es la cadena 'true', la señal empieza en true,
// si no, en false.
isLoggedIn = signal<boolean>(localStorage.getItem('sesion') === 'true');

// 1. NUEVO: Señal para el rol
  rolActual = signal<string | null>(localStorage.getItem('rol'));

// 2. Definimos la función login que recibe las credenciales y devuelve un Observable (un flujo de datos) 
// con true o false.
login(email: string, pass: string): Observable<boolean> {
  
  // 3. Llamamos al servicio de usuarios para obtener la lista completa desde Firebase.
  // Usamos .pipe() para transformar la respuesta antes de enviarla al componente.
  return this.usuarioService.getUsuarios().pipe(
    
    // 4. El operador 'map' toma la lista de usuarios y nos permite trabajar con ella.
    map(usuarios => {
      // 5. Buscamos dentro del arreglo de usuarios uno que coincida EXACTAMENTE con el email y el password 
      // ingresados.
      const usuarioCoincide = usuarios.find(u => u.email === email && u.password === pass);
      
      // 6. Si 'userFound' tiene datos (es decir, las credenciales son correctas):
      if (usuarioCoincide) {
        // 7. Guardamos en el navegador que la sesión es válida para que no se cierre al refrescar (F5).
        localStorage.setItem('sesion', 'true');
        // 8. Guardamos los datos del usuario (nombre, etc.) convirtiendo el objeto a texto (JSON).
        localStorage.setItem('user', JSON.stringify(usuarioCoincide));

        // 2. NUEVO: Guardar el rol en el navegador y en la señal
          localStorage.setItem('rol', usuarioCoincide.rol);

          // --- AGREGA ESTA LÍNEA AQUÍ ---
  this.rolActual.set(usuarioCoincide.rol);

        // 9. Cambiamos el valor de nuestra señal a 'true' para que toda la app se entere del cambio.
        this.isLoggedIn.set(true);
        
        // 10. Devolvemos 'true' para confirmar que el login fue exitoso.
        return true;
      }
      
      // 11. Si no se encontró el usuario, devolvemos 'false' para mostrar el error en el componente.
      return false;
    })
  );

  }

  logout() {
    localStorage.removeItem('sesion');
    localStorage.removeItem('user');
    localStorage.removeItem('rol'); // 3. NUEVO: Limpiar rol
    this.isLoggedIn.set(false);
    this.rolActual.set(null); // 4. NUEVO: Resetear señal
  }




 /*public usuario: User | null = null; // ✅ guardamos el usuario de Firebase tal cual
  private auth = getAuth();

  login(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
  // signInWithEmailAndPassword es una función del SDK de Firebase Auth
  // que permite iniciar sesión usando **email y contraseña**.
  // Recibe tres parámetros:
  // 1️⃣ this.auth → el objeto de autenticación de Firebase inicializado.
  // 2️⃣ email → el email del usuario que intenta iniciar sesión.
  // 3️⃣ password → la contraseña correspondiente a ese email.

  .then(res => this.usuario = res.user) 
  // .then() se ejecuta cuando Firebase confirma que el login fue exitoso.
  // 'res' es el resultado que devuelve Firebase, contiene información del usuario.
  // res.user es un objeto User de Firebase que incluye uid, email, displayName, etc.
  // Aquí lo asignamos directamente a la propiedad 'usuario' de nuestro servicio
  // para usarla en la app, sin mapear manual campos extra.

  .catch(err => console.error('Login fallido:', err.message)); 
  // .catch() se ejecuta si hubo un error al intentar iniciar sesión.
  // 'err' es el error devuelto por Firebase (ej. email incorrecto, contraseña inválida).
  // console.error muestra un mensaje de error en la consola para debug.
  }

  logout() {
    //cierra la sesión del usuario actualmente logueado.
    signOut(this.auth);
    this.usuario = null;
  }*/
}

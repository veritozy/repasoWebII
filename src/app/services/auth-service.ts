import { inject, Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { getAuth, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

 public usuario: User | null = null; // ✅ guardamos el usuario de Firebase tal cual
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
  }
}

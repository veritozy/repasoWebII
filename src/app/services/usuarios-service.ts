import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private http = inject(HttpClient);
  
  private API_URL = 'https://web-ii-45434-default-rtdb.firebaseio.com';

  /* MÉTODO GET: Trae la lista de la API externa
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.API_URL}/usuarios.json`);
  }*/

    getUsuarios(): Observable<Usuario[]> {
  // 1. Se realiza la petición GET indicando que Firebase devolverá un objeto con claves de tipo string y valores de tipo Usuario.
  return this.http.get<{ [key: string]: Usuario }>(`${this.API_URL}/usuarios.json`).pipe(
    // 2. El pipe permite usar operadores de transformación como map para procesar la respuesta antes de que llegue al componente.
    map(respuesta => {
      // 3. Se verifica si la respuesta de Firebase es nula o indefinida (base de datos vacía) para evitar errores al procesar.
      if (!respuesta) {
        // 4. Si no hay datos, se retorna un arreglo vacío para que el componente siempre reciba una lista válida.
        return [];
      }
      // 5. Object.keys(res) obtiene un arreglo con todas las etiquetas o IDs que Firebase generó para cada usuario.
      // 6. El segundo .map recorre cada uno de esos IDs para transformar el objeto original en un formato de lista.
      return Object.keys(respuesta).map(id => {
        
        // 7. Se crea un nuevo objeto que combina las propiedades del usuario (usando el operador spread ...) con su ID respectivo.
        const usuarioConId = {
          ...respuesta[id], // Copia todas las propiedades del usuario (ej. nombre, email) encontradas bajo ese ID específico.
          id: id      // Asigna el ID de Firebase a la propiedad 'id' para que el objeto esté completo y la tabla pueda identificarlo.
        };

        // 8. Se retorna el objeto ya transformado para que se acumule en el nuevo arreglo de usuarios.
        return usuarioConId;
      });
    })
  );
}


   
  // MÉTODO POST: Envía un nuevo JSON a la API
  postUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.API_URL}/usuarios.json`, usuario);
  }

  //Método buscar por id para put y delete - no es necesario a menos que llame a otro componente(tabla)
  getUsuarioById(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.API_URL}/usuarios/${id}.json`);
  }

  //Método PUT
  putUsuario(id: string, usuario: Usuario): Observable<Usuario> {
    // Combinamos la URL base con el ID del usuario
    return this.http.put<Usuario>(`${this.API_URL}/usuarios/${id}.json`, usuario);
  }

  //Método DELETE
  deleteUsuario(id: string): Observable<void> {
    // Le decimos al servidor: "borra el recurso con este ID"
    return this.http.delete<void>(`${this.API_URL}/usuarios/${id}.json`);
  }
}

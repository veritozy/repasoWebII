import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse, Pet } from '../models/pet';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class PetService {
  private http = inject(HttpClient);

  private API_PET='https://www.mockdog.dev/api/dogs'

//Un Observable es una especie de “caja de datos que llegarán en el futuro”.
//Angular lo usa para manejar peticiones HTTP, porque estas no devuelven datos al instante,
// sino que llegan de forma asincrónica.
//Con un Observable puedes suscribirte y ejecutar código cuando los datos llegan:
  getPets(): Observable<ApiResponse> { //Esto indica el tipo de valor que devuelve el método: 
  // un Observable que emitirá un objeto de tipo ApiResponse.
    return this.http.get<ApiResponse>(this.API_PET)//Hace la petición y le dice a TS qué tipo esperar.
    //“Haz la petición GET a la URL que guardé en this.API_PET”.
  }
  
}

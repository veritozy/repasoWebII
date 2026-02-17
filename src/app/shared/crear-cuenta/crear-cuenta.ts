import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-crear-cuenta',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear-cuenta.html',
  styleUrl: './crear-cuenta.css',
})
export class CrearCuenta {
  //herramienta que te permite crear formularios rápidamente escribiendo menos código,
  private fb = inject(FormBuilder);

  reglaEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  reglaPassword = '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$';

  cuentaForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.pattern(this.reglaEmail)]],
      password: ['', [Validators.required, Validators.pattern(this.reglaPassword)]],
      comentario: ['']
    },
  
  );

// control: AbstractControl: "Chicos, esto es solo una etiqueta. Le dice a la computadora que lo que va a entrar a la función es un formulario. Si no le ponemos ese nombre, la computadora no sabe que tiene que buscar cajitas de texto dentro".
//: ValidationErrors | null: "Esto es el resultado del examen. La función solo puede responder dos cosas: o una lista de errores (ValidationErrors) o nada (null) si el alumno aprobó".
//AbstractControl es el "molde" genérico que representa a cualquier pieza del formulario (ya sea una casilla suelta o el formulario entero).
//ValidationErrors es un simple "archivador" de Angular que guarda la lista de fallos que tiene una casilla.
  validarClaves(control: AbstractControl): ValidationErrors | null {
    // (El signo de interrogación): Este es el "seguro de vida". Significa: "Si por alguna razón no encuentras el campo (porque está mal escrito o no existe), no te rompas ni des un error fatal; simplemente detente ahí". Evita que la página se quede en blanco.
    const clave1 = control.get('password')?.value;
    const clave2 = control.get('repeatPassword')?.value;

    // Si coinciden es null (está bien), si no, devolvemos el objeto de error
    return clave1 === clave2 ? null : { noCoinciden: true };
  }

  // El "traductor" que simplifica el HTML
mostrarError(campo: string, tipoError: string): boolean {
  // 1. Buscamos la casilla
  const casilla = this.cuentaForm.get(campo);

  // 2. Si la casilla existe, está mal (invalid) y el usuario la tocó...
  if (casilla && casilla.invalid && casilla.touched) {
    // 3. Revisamos si tiene el error específico que nos interesa
    return casilla.hasError(tipoError);
  }

  // Si no se cumple lo anterior, no mostramos nada
  return false;
}

//Función que se ejecuta al intentar enviar los datos. No devuelve ningún valor
registrar(): void {
  //revisa si el formulario cumple con todas las reglas
  if (this.cuentaForm.valid) {
    //URLSearchParams(): Crea un objeto especial que formatea los datos como una URL (ejemplo: nombre=juan&pass=123). 
    // Es el formato que esperan muchos servicios de hosting como Netlify para procesar formularios.
    const cuerpo = new URLSearchParams();
    //Le añade una etiqueta oculta para decirle al servidor que este formulario se llama "contacto".
    cuerpo.set('form-name', 'contacto');
    
    // Usamos ?? '' para indicar que Si el valor es nulo o indefinido, pon un texto vacío
    //Aquí se toman los valores que el usuario escribió.
    cuerpo.set('email', this.cuentaForm.value.email ?? '');
    cuerpo.set('password', this.cuentaForm.value.password ?? '');
    cuerpo.set('comentarios', this.cuentaForm.value.comentario ?? '');
//función moderna de JavaScript que se usa para hacer peticiones HTTP a través de la red. En español, "fetch" significa "ir a buscar" 
// o "traer"
//Envía los datos a la raíz del sitio web.
    fetch('/', { //POMESA
      //Indica que estás enviando información nueva
      method: 'POST',
      //Le avisa al servidor que los datos vienen codificados como una URL, no como un JSON.
      //Headers: Dice qué tipo de información envías.
      //es un formulario de texto estándar
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //Convierte todo el objeto que armamos antes en una cadena de texto larga lista para viajar por internet.
      //Body: Es la información en sí misma.
      body: cuerpo.toString()
    })
    //Si el envío sale bien, muestra un mensaje en la consola
    .then(() => {
      console.log('¡Enviado con éxito!');
      this.cuentaForm.reset();
    })
    .catch((error) => console.error('Error:', error));
  }
}
}

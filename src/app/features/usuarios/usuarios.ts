import { Component, inject, signal } from '@angular/core';
import { HeroHome } from "../../shared/hero/hero";
import { UsuariosService } from '../../services/usuarios-service';
import { Usuario } from '../../models/usuario';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  imports: [HeroHome, FormsModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  private usuarioService = inject(UsuariosService);
  private fb = inject(FormBuilder);

  // VARIABLE CLAVE: Para saber si estamos editando o registrando
  editando = false;

  // Señal para manejar la lista reactiva
  listaUsuarios = signal<Usuario[]>([]);

  // Objeto para el formulario (vínculo con el POST)
  nuevoUsuario: Usuario =  {
    nombre: '',
    email: '',
    telefono: ''
  };

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.usuarioService.getUsuarios().subscribe(datos=>{
      this.listaUsuarios.set(datos)
    });
  }


// --- FUNCIÓN PARA BORRAR ---
  eliminar(id: string) {
    //CONFIRM viene del Navegador Web propio de JS que sirve para preguntar, tiene dos botones
    if (confirm('¿Deseas eliminar este usuario?')) {
      this.usuarioService.deleteUsuario(id).subscribe(() => {
        // Filtramos la señal para quitar el usuario de la vista de inmediato
        this.listaUsuarios.set(this.listaUsuarios().filter(u => u.id !== id));
      });
    }
  }

  // --- FUNCIÓN PARA "SUBIR" LOS DATOS AL FORMULARIO ---
  seleccionarParaEditar(user: Usuario) {
    this.editando = true;
    //descomponer el objeto original para crear uno nuevo.
    this.nuevoUsuario = { ...user }; // Creamos una copia para que el formulario tenga los datos
  }

registrar() {
    if (this.editando && this.nuevoUsuario.id) {
      // Lógica de ACTUALIZAR (PUT)
      this.usuarioService.putUsuario(this.nuevoUsuario.id, this.nuevoUsuario).subscribe(() => {
        // Actualizamos el usuario específico en la señal
       this.obtenerUsuarios();
        this.resetear();
      });
    } else {
      // Lógica de CREAR (Su código original)
      this.usuarioService.postUsuario(this.nuevoUsuario).subscribe(() => {
        this.obtenerUsuarios();
        this.resetear();
      });
    }
  }

  resetear() {
    this.editando = false;
    this.nuevoUsuario = { nombre: '', email: '', telefono: '' };
  }

}

import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { Acerca } from './features/acerca/acerca';
import { Catalogo } from './features/catalogo/catalogo';
import { Pets } from './shared/pets/pets';
import { Usuarios } from './features/usuarios/usuarios';
import { CrearCuenta } from './shared/crear-cuenta/crear-cuenta';
import { Login } from './shared/login/login';
import { authGuard } from './guards/auth-guard';



export const routes: Routes = [
    {path:'', component:HomePage},
    {path:'acerca', component:Acerca},
    {path:'catalogo', component:Catalogo},
    {path:'mascotas', component:Pets},
    {path:'usuarios', component:Usuarios, canActivate:[authGuard]},
    {path:'cuenta', component:CrearCuenta},
    {path:'login', component:Login}
  
];

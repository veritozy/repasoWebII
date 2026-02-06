import { Routes } from '@angular/router';
import { HomePage } from './features/home-page/home-page';
import { Acerca } from './features/acerca/acerca';
import { Catalogo } from './features/catalogo/catalogo';

export const routes: Routes = [
    {path:'', component:HomePage},
    {path:'acerca', component:Acerca},
    {path:'catalogo', component:Catalogo}
];

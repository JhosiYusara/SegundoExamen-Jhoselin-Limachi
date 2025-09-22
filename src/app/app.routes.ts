
import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
    { path: '', component: App }, // Esta es la ruta por defecto
    { path: 'portfolio', component: App }, // Enlaza a la sección de portafolio
    { path: 'about', component: App }, // Enlaza a la sección de "acerca de"
    { path: 'contact', component: App }, // Enlaza a la sección de contacto
    // Puedes agregar más rutas si lo necesitas
];
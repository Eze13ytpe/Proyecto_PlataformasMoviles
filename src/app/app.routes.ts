import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () => import('./componentes/inicio/inicio.component').then(m => m.InicioComponent),
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
{
    path: 'productos',
    loadComponent: () => import('./componentes/productos/productos.component').then(m => m.ProductosComponent),
  },
  {
    path: 'favoritos',
    loadComponent: () => import('./componentes/favoritos/favoritos.component').then(m => m.FavoritosComponent),
  },
  {
    path: 'carrito',
    loadComponent: () => import('./componentes/carrito/carrito.component').then(m => m.CarritoComponent),
  },
   {
    path: 'contacto',
    loadComponent: () => import('./componentes/contactos/contactos.component').then(m => m.ContactosComponent),
  },

];

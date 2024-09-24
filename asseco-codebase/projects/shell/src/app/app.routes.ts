import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    title: 'SHELL',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'SHELL | HOME',
    component: HomeComponent,
  },
  {
    path: 'form',
    title: 'SHELL | MFE1 - component',
    loadComponent: () =>
      loadRemoteModule('mfe1', './FormComponent').then((m) => m.FormComponent),
  },
  {
    path: '**',
    title: 'SHELL | Ooops! Not found',
    component: PageNotFoundComponent,
  },
];

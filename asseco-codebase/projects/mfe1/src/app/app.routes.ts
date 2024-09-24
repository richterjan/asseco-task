import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/layout/page-not-found/page-not-found.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    title: 'MFE1',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'MFE1 | HOME',
    component: HomeComponent,
  },
  {
    path: 'form',
    title: 'MFE1 | form - component',
    component: FormComponent,
  },
  {
    path: '**',
    title: 'MFE1 | Ooops! Not found',
    component: PageNotFoundComponent,
  },
];

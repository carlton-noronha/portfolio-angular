import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { routes as ROUTES } from './shared/constants';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    pathMatch: 'full',
  },
  {
    path: `${ROUTES.EXPERIENCE}`,
    loadComponent: () => import('./components/experience/experience').then((m) => m.Experience),
  },
];

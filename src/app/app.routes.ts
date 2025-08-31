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
    path: `${ROUTES.EMPLOYMENT_HISTORY}`,
    loadComponent: () =>
      import('./components/employment-history/employment-history').then((m) => m.EmploymentHistory),
  },
];

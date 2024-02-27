import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((r) => r.HomeComponent),
  },
  {
    path: 'weather',
    children: [
      {
        path: ':id',
        loadComponent: () =>
          import('./weather/weather.component').then((r) => r.WeatherComponent),
      },
    ],
  },
];

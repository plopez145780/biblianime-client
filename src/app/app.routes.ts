import { Routes } from '@angular/router';
import { AnimeListComponent } from './pages/anime-list/anime-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ROUTES } from './models/route.constante';

export const routes: Routes = [
  { path: '', redirectTo: ROUTES.CATALOGUE, pathMatch: 'full' },
  { path: ROUTES.CATALOGUE, component: AnimeListComponent },
  { path: '**', component: NotFoundComponent }
];

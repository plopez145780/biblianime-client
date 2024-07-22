import { Routes } from '@angular/router';
import { IdentificationComponent } from './pages/identification/identification.component';
import { AnimeListComponent } from './pages/anime-list/anime-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ROUTES } from './models/route.constante';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: ROUTES.CATALOGUE, pathMatch: 'full' },
  { path: ROUTES.IDENTIFICATION, component: IdentificationComponent },
  { path: ROUTES.CATALOGUE, component: AnimeListComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];

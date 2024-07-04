import { Routes } from '@angular/router';
import { AnimeListComponent } from './pages/anime-list/anime-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AddOrUpdateAnimeComponent } from './pages/add-or-update-anime/add-or-update-anime.component';

export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AnimeListComponent },
  { path: 'anime', component: AddOrUpdateAnimeComponent },
  { path: '**', component: NotFoundComponent }
];

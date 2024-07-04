import { Injectable } from '@angular/core';
import { Anime, AnimeRanking } from '../../models/anime.model';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  getAnimes(): Observable<Anime[]> {
    return of([
      {
        id: 1,
        title: {
          english: 'Demon Slayer',
          french: 'Chasseur de démons',
          japanese: '鬼滅の刃'
        },
        genres: ['Action', 'Adventure', 'Drama'],
        status: 'Finished',
        synopsis: 'Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado\'s shoulders.',
        season: 1,
        episodes: 26,
        image: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
        ranking: AnimeRanking.Four,
        streamingLinks: [
          { label: 'Crunchyroll', url: 'https://www.crunchyroll.com/fr/demon-slayer-kimetsu-no-yaiba' },
          { label: 'Funimation', url: 'https://www.funimation.com/shows/demon-slayer-kimetsu-no-yaiba/' }]
      },
      {
        id: 2,
        title: {
          english: 'My Hero Academia',
          french: 'Mon académie des héros',
          japanese: '僕のヒーローアカデミア'
        },
        genres: ['Action', 'Adventure', 'Comedy'],
        status: 'Ongoing',
        synopsis: 'The appearance of "quirks," newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting.',
        season: 5,
        episodes: 113,
        image: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
        ranking: AnimeRanking.Five,
        streamingLinks: [
          { label: 'Crunchyroll', url: 'https://www.crunchyroll.com/fr/my-hero-academia' },
          { label: 'Funimation', url: 'https://www.funimation.com/shows/my-hero-academia/' }]
      },
      {
        id: 3,
        title: {
          english: 'One Piece',
          french: 'L\'ultime trésor',
          japanese: 'ワンピース'
        },
        genres: ['Action', 'Adventure', 'Comedy'],
        status: 'Ongoing',
        synopsis: 'Gol D. Roger was known as the Pirate King, the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world.',
        season: 20,
        episodes: 1000,
        image: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
        ranking: AnimeRanking.Three,
        streamingLinks: [
          { label: 'Crunchyroll', url: 'https://www.crunchyroll.com/fr/one-piece' },
          { label: 'Funimation', url: 'https://www.funimation.com/shows/one-piece/' }]
      },
      {
        id: 4,
        title: {
          english: 'Naruto',
          french: 'Nounouille ;)',
          japanese: 'ナルト'
        },
        genres: ['Action', 'Adventure', 'Comedy'],
        status: 'Finished',
        synopsis: 'Moments prior to Naruto Uzumaki\'s birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc.',
        season: 9,
        episodes: 220,
        image: 'https://cdn.myanimelist.net/images/anime/13/17405.jpg',
        ranking: AnimeRanking.Three,
        streamingLinks: [
          { label: 'Crunchyroll', url: 'https://www.crunchyroll.com/fr/naruto' },
          { label: 'Funimation', url: 'https://www.funimation.com/shows/naruto/' }]
      },
    ]);
  }

  addAnime(anime: Anime): void {
    console.log('Adding anime:', anime);
  }

  getGenres(): Observable<string[]> {
    return of(['Action', 'Adventure', 'Comedy', 'Drama']);
  }

  addGenre(genre: string): void {
    console.log('Adding genre:', genre);
  }

  getStatuses(): Observable<string[]> {
    return of(['Finished', 'Ongoing']);
  }

  addStatus(status: string): void {
    console.log('Adding status:', status);
  }
}
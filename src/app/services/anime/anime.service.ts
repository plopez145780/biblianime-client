import { Injectable } from '@angular/core';
import { AnimesByTypeDTO, SimpleAnime } from '../../models/anime.model';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  getSimpleAnimes(): Observable<AnimesByTypeDTO[]> {
    return of([
      {
        type: 'TV (Continuing)',
        animeCardDTOS: [
          {
            title: `Demon Slayer`,
            url: 'https://myanimelist.net/anime/38000/Kimetsu_no_Yaiba',
            genres: ['Action', 'Adventure', 'Drama', 'test', 'longtest', 'verylongtest'],
            description: `Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado\'s shoulders.`,
            imageUrl: 'https://cdn.myanimelist.net/images/anime/1286/99889.jpg',
            totalEpisodes: 26,
            myanimelistId: 38000
          },
          {
            title: `My Hero Academia`,
            url: 'https://myanimelist.net/anime/31964/Boku_no_Hero_Academia',
            genres: ['Action', 'Adventure', 'Comedy'],
            description: `The appearance of "quirks," newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting.`,
            imageUrl: 'https://cdn.myanimelist.net/images/anime/10/78745.jpg',
            totalEpisodes: 113,
            myanimelistId: 31964
          },
          {
            title: `One Piece`,
            url: 'https://myanimelist.net/anime/21/One_Piece',
            genres: ['Action', 'Adventure', 'Fantasy'],
            description: `Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it.\r\n\r\nThe late King of the Pirates, Gol D. Roger, stirred up the world before his death by disclosing the whereabouts of his hoard of riches and daring everyone to obtain it. Ever since then, countless powerful pirates have sailed dangerous seas for the prized One Piece only to never return. Although Luffy lacks a crew and a proper ship, he is endowed with a superhuman ability and an unbreakable spirit that make him not only a formidable adversary but also an inspiration to many.\r\n\r\nAs he faces numerous challenges with a big smile on his face, Luffy gathers one-of-a-kind companions to join him in his ambitious endeavor, together embracing perils and wonders on their once-in-a-lifetime adventure.\r\n\r\n[Written by MAL Rewrite]`,
            imageUrl: 'https://cdn.myanimelist.net/images/anime/6/73245.jpg',
            totalEpisodes: 1000,
            myanimelistId: 21
          },
          {
            title: `Meitantei Conan`,
            url: 'https://myanimelist.net/anime/235/Meitantei_Conan',
            genres: ['Adventure', 'Comedy', 'Mystery'],
            description: `Shinichi Kudou, a high school student of astounding talent in detective work, is well known for having solved several challenging cases. One day, when Shinichi spots two suspicious men and decides to follow them, he inadvertently becomes witness to a disturbing illegal activity. Unfortunately, he is caught in the act, so the men dose him with an experimental drug formulated by their criminal organization, leaving him to his death. However, to his own astonishment, Shinichi lives to see another day, but now in the body of a seven-year-old child.\r\n\r\nPerfectly preserving his original intelligence, he hides his real identity from everyone, including his childhood friend Ran Mouri and her father, private detective Kogorou Mouri. To this end, he takes on the alias of Conan Edogawa, inspired by the mystery writers Arthur Conan Doyle and Ranpo Edogawa.\r\n\r\nShinichi, as Conan, starts secretly solving the senior Mouri's cases from behind the scenes with his still exceptional sleuthing skills, while covertly investigating the organization responsible for his current state, hoping to reverse the drug's effects someday.\r\n\r\n[Written by MAL Rewrite]`,
            imageUrl: 'https://cdn.myanimelist.net/images/anime/2/44233.jpg',
            totalEpisodes: 1000,
            myanimelistId: 235
          },
          {
            title: `Tensei shitara Slime Datta Ken 3rd Season`,
            url: 'https://myanimelist.net/anime/53580/Tensei_shitara_Slime_Datta_Ken_3rd_Season',
            genres: ['Action', 'Adventure', 'Comedy', 'Fantasy'],
            description: `Third season of Tensei shitara Slime Datta Ken.`,
            imageUrl: 'https://cdn.myanimelist.net/images/anime/1368/140405.jpg',
            totalEpisodes: 24,
            myanimelistId: 53580
          }
        ]
      },
      {
        type: 'Movie',
        animeCardDTOS: [
          {
            title: `Overlord Movie 3: Sei Oukoku-hen`,
            url: 'https://myanimelist.net/anime/48896/Overlord_Movie_3__Sei_Oukoku-hen',
            genres: ['Action', 'Adventure', 'Fantasy'],
            description: `The Sacred Kingdom has enjoyed a great many years without war thanks to a colossal wall constructed after a historic tragedy. They understand best how fragile peace can be. When the terrible demon Jaldabaoth takes to the field at the head of a united army of monstrous tribes, the Sacred Kingdom's leaders know their defenses are not enough. With the very existence of the country at stake, the pious have no choice but to seek help wherever they can get it, even if it means breaking taboo and parlaying with the undead king of the Nation of Darkness!\r\n\r\n(Source: Yen Press)`,
            imageUrl: 'https://cdn.myanimelist.net/images/anime/1271/127174.jpg',
            totalEpisodes: 1,
            myanimelistId: 48896
          },
          {
            title: `Boku no Hero Academia the Movie 4: You're Next`,
            url: 'https://myanimelist.net/anime/56196/Boku_no_Hero_Academia_the_Movie_4__Youre_Next',
            genres: ['Action'],
            description: `The fourth Boku no Hero Academia movie.`,
            imageUrl: 'https://cdn.myanimelist.net/images/anime/1256/144064.jpg',
            totalEpisodes: 1,
            myanimelistId: 56196
          },
          {
            title: `Bai She 3: Fusheng`,
            url: 'https://myanimelist.net/anime/57801/Bai_She_3__Fusheng',
            genres: ['Action', 'Adventure', 'Fantasy'],
            description: `(No synopsis yet.)`,
            imageUrl: 'https://cdn.myanimelist.net/images/anime/1448/140857.jpg',
            totalEpisodes: 1,
            myanimelistId: 57801
          },
          {
            title: `San Shaonu`,
            url: 'https://myanimelist.net/anime/59236/San_Shaonu',
            genres: ['Adventure', 'Fantasy'],
            description: `(No synopsis yet.)`,
            imageUrl: null,
            totalEpisodes: 1,
            myanimelistId: 59236
          }
        ]
      },
      {
        type: 'ONA',
        animeCardDTOS: [
          {
            title: `Monogatari Series: Off & Monster Season`,
            url: 'https://myanimelist.net/anime/57864/Monogatari_Series__Off___Monster_Season',
            genres: ['Comedy', 'Mystery', 'Supernatural'],
            description: `After graduating from high school, the story of Koyomi Araragi came to an end. This time, it truly ended. However, the story of the girls who were saved by Araragi was not over. It is a prequel, or perhaps a sequel to their struggles in youth.\r\n\r\n(Source: MAL News)`,
            imageUrl: 'https://cdn.myanimelist.net/images/anime/1741/140952.jpg',
            totalEpisodes: 0,
            myanimelistId: 57864
          }
        ]
      }
    ]);
  }

  addAnime(anime: SimpleAnime): void {
    console.log('Adding anime:', anime);
  }
}
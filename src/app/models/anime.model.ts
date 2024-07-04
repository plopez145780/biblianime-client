export interface Anime {
  id: number;
  title: {
    english: string;
    french: string;
    japanese: string;
  };
  genres: string[];
  status: string;
  synopsis: string;
  season: number;
  episodes: number;
  image: string;
  ranking: AnimeRanking;
  streamingLinks: AnimeLink[];
}

export enum AnimeRanking {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5
}

export interface AnimeLink {
  label: string;
  url: string;
}
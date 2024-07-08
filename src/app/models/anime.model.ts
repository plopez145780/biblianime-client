export interface AnimesByTypeDTO {
  type: string;
  animeCardDTOS: SimpleAnime[];
}

export interface SimpleAnime {
  title: string;
  url: string;
  genres: string[];
  description: string;
  imageUrl: string | null;
  totalEpisodes: number;
  myanimelistId: number;
}
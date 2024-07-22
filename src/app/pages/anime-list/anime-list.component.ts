import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime/anime.service';
import { AnimesByTypeDTO } from '../../models/anime.model';
import { AnimeCardComponent } from '../../components/anime-card/anime-card.component';

@Component({
  standalone: true,
  imports: [AnimeCardComponent],
  templateUrl: './anime-list.component.html',
  styleUrl: './anime-list.component.css'
})
export class AnimeListComponent implements OnInit {
  animeTypes: AnimesByTypeDTO[] = [];

  constructor(private readonly animeService: AnimeService) {}

  ngOnInit() {
    this.animeService.getSimpleAnimes().subscribe((data) => {
      this.animeTypes.push(...data);
    });
  }

}

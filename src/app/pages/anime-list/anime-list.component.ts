import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime/anime.service';
import { Anime } from '../../models/anime.model';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-anime-list',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './anime-list.component.html',
  styleUrl: './anime-list.component.css'
})
export class AnimeListComponent implements OnInit {
  animes: Anime[] = [];

  constructor(private readonly animeService: AnimeService) {}

  ngOnInit() {
    this.animeService.getAnimes().subscribe((data) => {
      this.animes.push(...data);
    });
  }

}

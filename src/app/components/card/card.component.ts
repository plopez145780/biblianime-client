import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Anime } from '../../models/anime.model';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonToggleModule, MatChipsModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  @Input({ required: true }) anime!: Anime;
  displayTitle: string;
  titleLanguage: string;

  constructor() {
    this.displayTitle = 'test';
    this.titleLanguage = 'en';
    // TODO: get user preference
  }

  ngOnInit(): void {
    this.getTitleByLanguage(this.titleLanguage);
  }

  getTitleByLanguage(language: string): void {
    if (this.anime === undefined) {
      console.warn('Anime is undefined');
    }
    switch (language) {
      case 'en':
        this.displayTitle = this.anime.title.english;
        break;
      case 'fr':
        this.displayTitle = this.anime.title.french;
        break;
      case 'jp':
        this.displayTitle = this.anime.title.japanese;
        break;
      default:
        this.displayTitle = this.anime.title.japanese;
    }
  }
}

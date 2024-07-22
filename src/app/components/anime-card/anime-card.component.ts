import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SimpleAnime } from '../../models/anime.model';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snackbar/snackbar.component';
import { SnackBarType } from '../../models/snackbar.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatChipsModule],
  templateUrl: './anime-card.component.html',
  styleUrl: './anime-card.component.css'
})
export class AnimeCardComponent {
  @Input({ required: true }) anime!: SimpleAnime;
  durationInSeconds = 5;
  
  constructor(private readonly snackBar: MatSnackBar) {}

  addAnimeToCollection(): void {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      data: {
        message: `L'anime a été ajouté à votre collection.`,
        type: SnackBarType.Success
      },
      horizontalPosition: 'end',
      verticalPosition: 'bottom'
    });
  }
}

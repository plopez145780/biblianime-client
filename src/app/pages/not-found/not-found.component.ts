import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

  constructor(private readonly router: Router) {}

  navigateTo(): void {
    this.router.navigate(['/']);
  }

}

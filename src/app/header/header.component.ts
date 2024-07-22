import { Component, Input } from '@angular/core';
import { ThemeToggleComponent } from '../components/theme-toggle/theme-toggle.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeToggleComponent, MatToolbarModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input({ required: true }) appTitle!: string;

  constructor(private readonly router: Router) {}

  navigateTo(): void {
    this.router.navigate(['/']);
  }
}

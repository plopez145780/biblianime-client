import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css'
})
export class ThemeToggleComponent {
  isDarkMode: boolean = this.themeService.isDarkMode();

  constructor(private themeService: ThemeService) {}

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.setDarkMode(this.isDarkMode);
  }
}

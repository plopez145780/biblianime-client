import { Component, Input } from '@angular/core';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ROUTES } from '../../models/route.constante';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeToggleComponent, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input({ required: true }) appTitle!: string;
  isAuthentified = false;

  constructor(private readonly router: Router, private readonly auth: AuthService) {
    this.auth.isAuthenticated$.subscribe((isAuthenticated: boolean) => {
      this.isAuthentified = isAuthenticated;
    });
  }

  goToHome(): void {
    this.router.navigateByUrl(ROUTES.ACCUEIL);
  }

  logout(): void {
    this.auth.logout();
  }
}

import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './identification.component.html',
  styleUrl: './identification.component.css'
})
export class IdentificationComponent {
  hide = signal(true);

  constructor(private readonly auth: AuthService) {}

  hidePassword(event: MouseEvent): void {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  login(): void {
    this.auth.login();
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from '../../models/route.constante';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSub$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly isAuthenticated$ = this.isAuthenticatedSub$.asObservable();

  constructor(private readonly router: Router) {}

  login(): void {
    /* TODO: call backend for check user data. How to refresh token validity ?  */
    this.isAuthenticatedSub$.next(true);
    this.redirectTo(ROUTES.ACCUEIL);
  }

  logout(): void {
    this.isAuthenticatedSub$.next(false);
    this.redirectTo(ROUTES.IDENTIFICATION);
  }

  isUserAuthenticated(): boolean {
    return this.isAuthenticatedSub$.value;
  }

  redirectTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}

import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from '../services/auth/auth.service';
import { ROUTES } from '../models/route.constante';

export const AuthGuard = () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    if(!auth.isUserAuthenticated()) {
        router.navigateByUrl(ROUTES.IDENTIFICATION);
        return false;
    }
    return true;
}
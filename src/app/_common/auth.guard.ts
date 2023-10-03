import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard {
    constructor(private authService: UserAuthService,  private router: Router) { }
    canActivate():
      | Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree>
      | boolean
      | UrlTree {
      if (!this.authService.isLoggedIn()) {
         this.router.navigate(['/login']);
        return false;
      }
      // logged in, so return true
      this.authService.isLoggedIn();
      return true;
    }
}
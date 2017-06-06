import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot,RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor( private auht:AuthService ) { }

  canActivate( next:ActivatedRouteSnapshot, state:RouterStateSnapshot ) {
    console.log(next);
    if (this.auht.isAuthenticated()) {
      console.log("está autenticado");
      return true;
    } else {
      console.error("no está autenticado");
      return false;
    }

  }

}

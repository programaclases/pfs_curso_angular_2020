import { logging } from 'protractor';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public changeMenu = new Subject();

  constructor(
    private router: Router,
  ) {
    this.comprobarEstado();
   }

  comprobarLogin(loggin: LoginModel): boolean {
      if ( loggin.email.localeCompare('admin@gmail.com') !== 0) {
        console.log('email o password incorrectos');
        return false;
      }
      if ( loggin.password.localeCompare('1234') !== 0) {
        console.log('email o password incorrectos');
        return false;
      }
      localStorage.setItem('email', loggin.email);
      sessionStorage.setItem('email', loggin.email);
      this.changeMenu.next(true);
      this.router.navigate(['home']);
      return true;
  }

  comprobarEstado(): void {
    if ( localStorage.getItem('email') == null ) {

    } else {
       if (localStorage.getItem('email').localeCompare('admin@gmail.com') === 0 ) {
        this.changeMenu.next(true);
       }
    }
  }
}

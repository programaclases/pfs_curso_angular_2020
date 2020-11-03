import { logging } from 'protractor';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { url_pfs } from '../config/direcciones';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public changeMenu = new Subject();

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.comprobarEstado();
   }

  comprobarLogin(loggin: LoginModel): Observable<any> {
      /* if ( loggin.email.localeCompare('admin@gmail.com') !== 0) {
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
      return true; */
      const url = url_pfs + 'users/login';
      let body = {
        email: loggin.email,
        password: loggin.password,
      };
      return this.http.post( url, body );

  }

  cambiarMenu() {
    this.changeMenu.next(true);
  }

  comprobarEstado(): void {
    if ( localStorage.getItem('email') == null ) {

    } else {
       if (localStorage.getItem('email').length >= 1) {
        this.changeMenu.next(true);
       }
    }
  }

  borrarLogin() {
    localStorage.removeItem('email');
    localStorage.removeItem('token_pfs');
    localStorage.clear();
  }
}

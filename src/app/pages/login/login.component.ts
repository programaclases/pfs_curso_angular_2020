import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public email_password_wrong: boolean = false;


  constructor(
    private router: Router,
    private loginService: LoginService
  ) {

  }


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });


  }


  onSubmit(): void {
    console.log('this.loginForm', this.loginForm.value);
    this.loginService.comprobarLogin(this.loginForm.value).toPromise()
      .then((resp: any) => {
        console.log('resp ', resp);

        if (resp.mesage.nombre != null && resp.mesage.email != null) {
          localStorage.setItem('email', resp.mesage.email);
          localStorage.setItem('id', resp.mesage._id);
          this.loginService.cambiarMenu();
          this.router.navigate(['home']);
        } else {
          this.email_password_wrong = true;
          setTimeout(() => {
            this.email_password_wrong = false;
          }, 2000);
        }
      }).catch(error => {
        console.log('error', error);
      });

    /* if ( !respuesta ){
      this.email_password_wrong = true;
      setTimeout(() => {
        this.email_password_wrong = false;
      }, 2000);
    } else {

    } */


  }

  volver(): void {
    this.router.navigate(['home']);
  }
}

import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  public logueado: boolean = false;
  public userName: string = 'Usuario';
  constructor(
    private LoginService: LoginService

  ) { }

  ngOnInit(): void {
    

    this.LoginService.changeMenu.subscribe( resp => {
      if (resp === undefined ) {

      }else if ( resp === true ) {
        this.userName = localStorage.getItem('email');
        this.logueado = true;
      }

    });

    this.LoginService.comprobarEstado();
  }

}

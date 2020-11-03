import { ModalComponent } from './../modal/modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @ViewChild('myModal') mymodal: ModalComponent = new ModalComponent();

  public myTitle = 'Para salir del login';
  public myDescription = 'Modal para salir del login';
  public logueado: boolean = false;
  public userName: string = 'Usuario';
  constructor(
    private LoginService: LoginService

  ) { }

  ngOnInit(): void {
    // const headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json');

    this.LoginService.changeMenu.subscribe( resp => {
      if (resp === undefined ) {

      }else if ( resp === true ) {
        this.userName = localStorage.getItem('email');
        this.logueado = true;
      }

    });

    this.LoginService.comprobarEstado();
  }

  logOut(): void {
    this.mymodal.abrirModal();
  }

  recogerEstadoLogin( event: boolean ): void {
    console.log('recoger login', event);
    if ( event ) {
      this.logueado = false;
      this.LoginService.borrarLogin();
    }

  }
}

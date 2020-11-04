// import { UsuariosService } from './../../../services/usuarios.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-listar-usarios',
  templateUrl: './listar-usarios.component.html',
  styleUrls: ['./listar-usarios.component.scss']
})

export class ListarUsariosComponent implements OnInit, OnDestroy {


  public subscripcion: Subscription;
  public listUsers: any[] = [];
  public listHeader: any[] = [
    { label: 'Nombre' },
    { label: 'Email' },
    { label: 'Role' },
    { label: 'Opciones' },
  ];

  constructor( private usuariosService: UsuariosService) { }


  ngOnInit(): void {
   /*  this.subscripcion = this.usuariosService.listUsers().subscribe( usuarios => {
      console.log('usuarios', usuarios);

    } ); */
    this.listaUsuarios();
  }

  listaUsuarios(): void {
    this.usuariosService.listUsers().toPromise()
    .then( usuarios => {
      console.log('usuarios', usuarios);
      this.listUsers = usuarios;
    })
    .catch( error => {
        console.log('error', error);
    });
  }

  ngOnDestroy(): void {
    // para desescrirbirse
    console.log('unsubscribe');

    // this.subscripcion.unsubscribe();
  }

}

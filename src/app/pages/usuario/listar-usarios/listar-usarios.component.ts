import { ModalComponent } from './../../../components/modal/modal.component';
// import { UsuariosService } from './../../../services/usuarios.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {  Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-usarios',
  templateUrl: './listar-usarios.component.html',
  styleUrls: ['./listar-usarios.component.scss']
})

export class ListarUsariosComponent implements OnInit, OnDestroy {

  @ViewChild('modalUser',{static: false}) modalUser = new ModalComponent();

  public myTitle = 'Borrar usuario';
  public myDescription = 'Esta seguro que quiere eliminar este registro';


  public subscripcion: Subscription;
  public listUsers: any[] = [];
  public listHeader: any[] = [
    { label: 'Nombre' },
    { label: 'Email' },
    { label: 'Role' },
    { label: 'Opciones' },
  ];
  reserva: any;

  constructor(
    private usuariosService: UsuariosService,
    private route: Router
    ) { }


  ngOnInit(): void {
   /*  this.subscripcion = this.usuariosService.listUsers().subscribe( usuarios => {
      console.log('usuarios', usuarios);

    } ); */
    this.listaUsuarios();
  }


  ngOnDestroy(): void {
    // para desescrirbirse
    console.log('unsubscribe');

    // this.subscripcion.unsubscribe();
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

 

  crearUsuario(): void {
    this.route.navigate(['usuario/crear']);
  }

  editarUsuario(id): void {
    this.route.navigate(['usuario/edit/' + id  ]);
  }

  deleteUsuario(id): void {
  
    this.usuariosService.deleteUsers(id).toPromise()
      .then( resp => {
        console.log('resp', resp);
        this.listaUsuarios();
      }).catch( error => {
        console.log('error', error);
      });
  }


}

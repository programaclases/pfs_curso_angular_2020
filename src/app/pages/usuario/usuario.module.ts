import { GeneralModule } from './../../components/general/general/general.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsariosComponent } from './listar-usarios/listar-usarios.component';
import { UsuarioRoutingModule } from './usuario.routes';
import { CreateUsersComponent } from './create-users/create-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListarUsariosComponent,
    CreateUsersComponent,

  ],
  imports: [
    CommonModule,
    GeneralModule,
    FormsModule,
    ReactiveFormsModule,
    UsuarioRoutingModule,
  ]
})
export class UsuarioModule { }

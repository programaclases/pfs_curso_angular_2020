import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsariosComponent } from './listar-usarios/listar-usarios.component';
import { UsuarioRoutingModule } from './usuario.routes';



@NgModule({
  declarations: [ListarUsariosComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
  ]
})
export class UsuarioModule { }

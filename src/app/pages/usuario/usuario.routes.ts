import { CreateUsersComponent } from './create-users/create-users.component';
import { ListarUsariosComponent } from './listar-usarios/listar-usarios.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    { path: 'list', component: ListarUsariosComponent },
    { path: '', pathMatch: 'full', redirectTo: 'list' },
    { path: 'crear', component: CreateUsersComponent },
    { path: 'edit/:id', component: CreateUsersComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule {}

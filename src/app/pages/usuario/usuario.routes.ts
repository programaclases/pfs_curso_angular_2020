import { ListarUsariosComponent } from './listar-usarios/listar-usarios.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    { path: 'list', component: ListarUsariosComponent },
    { path: '', pathMatch: 'full', redirectTo: 'list' },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule {}

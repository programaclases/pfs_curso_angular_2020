import { ObservablesComponent } from './pages/observables/observables.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PromesasComponent } from './pages/promesas/promesas.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { PageNotFoundComponent } from 'src/app/pages/page-not-found/page-not-found.component';




const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'promesas', component: PromesasComponent },
  { path: 'obs', component: ObservablesComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

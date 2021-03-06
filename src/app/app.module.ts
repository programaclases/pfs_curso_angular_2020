import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PromesasComponent } from './pages/promesas/promesas.component';
import { ObservablesComponent } from './pages/observables/observables.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { OtromenuComponent } from './components/otromenu/otromenu.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { GeneralModule } from './components/general/general/general.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PromesasComponent,
    ObservablesComponent,
    MenuComponent,
    OtromenuComponent,
    LoginComponent,
    PageNotFoundComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GeneralModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ROUTES } from './app.route';
import { ListarService } from './listar/listar.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListarComponent,
    CadastrarComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ListarService],
  bootstrap: [AppComponent]
})
export class AppModule { }

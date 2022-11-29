import { CalendarioComponent } from './calendario/calendario.component';
import { TabelaAdmComponent } from './tabela-adm/tabela-adm.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRountingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CadAdmComponent } from './cad-adm/cad-adm.component';
import { CadEventosComponent } from './cad-eventos/cad-eventos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TabelaAdmComponent,
    CalendarioComponent,
    CadAdmComponent,
    CadEventosComponent
  ],
  imports: [
    BrowserModule,
    AppRountingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

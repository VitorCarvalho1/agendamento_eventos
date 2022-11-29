import { CalendarioComponent } from './calendario/calendario.component';
import { TabelaAdmComponent } from './tabela-adm/tabela-adm.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CadAdmComponent } from './cad-adm/cad-adm.component';
import { CadEventosComponent } from './cad-eventos/cad-eventos.component';


const routes: Routes = [
<<<<<<< HEAD
    {path: '', component: HomeComponent},
    {path: 'tabela-adm', component: TabelaAdmComponent},
    {path: 'cad-eventos', component: CadEventosComponent},
    {path: 'cad-adm', component: CadAdmComponent}
=======
    {path: '',component: HomeComponent},
    {path: 'tabela-adm',component: TabelaAdmComponent},
    {path: 'calendario',component: CalendarioComponent}
>>>>>>> 7e315ffef5ab1d73421ee139616be2710aafc329
]


@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRountingModule {}

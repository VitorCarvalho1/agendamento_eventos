import { TabelaAdmComponent } from './tabela-adm/tabela-adm.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CadAdmComponent } from './cad-adm/cad-adm.component';
import { CadEventosComponent } from './cad-eventos/cad-eventos.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'tabela-adm', component: TabelaAdmComponent},
    {path: 'cad-eventos', component: CadEventosComponent},
    {path: 'cad-adm', component: CadAdmComponent}
]


@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRountingModule {}

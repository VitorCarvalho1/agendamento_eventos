import { TabelaAdmComponent } from './tabela-adm/tabela-adm.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'tabela-adm',component: TabelaAdmComponent}
]


@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRountingModule {}

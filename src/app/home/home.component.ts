import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardComponent } from '../card/card.component';
import { TabelaAdmComponent } from '../tabela-adm/tabela-adm.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  agendamentos = [
    {
      "status": "Em andamento",
      "title": "FETECAgro 2022 2sementre",
      "data": "16/11/2022",
      "horario_inicio": "8h00",
      "horario_fim": "22h00",
      "endereco": "FATEC Pompéia"
    },
    {
      "status": "Em andamento",
      "title": "FETECAgro 2022 2sementre",
      "data": "16/11/2022",
      "horario_inicio": "8h00",
      "horario_fim": "22h00",
      "endereco": "FATEC Pompéia"
    },
    {
      "status": "Em andamento",
      "title": "FETECAgro 2022 2sementre",
      "data": "16/11/2022",
      "horario_inicio": "8h00",
      "horario_fim": "22h00",
      "endereco": "FATEC Pompéia"
    },{
      "status": "Em andamento",
      "title": "FETECAgro 2022 2sementre",
      "data": "16/11/2022",
      "horario_inicio": "8h00",
      "horario_fim": "22h00",
      "endereco": "FATEC Pompéia"
    }
  ]

  constructor(private modalController:ModalController) { }

  async openModal() {
    const modal = await this.modalController.create({
      component: CardComponent,
      cssClass: 'modal'
    });
    await modal.present();

    const res= await modal.onDidDismiss();
  }

  ngOnInit(): void {
  }
  
}

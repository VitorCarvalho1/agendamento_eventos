import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
  
}

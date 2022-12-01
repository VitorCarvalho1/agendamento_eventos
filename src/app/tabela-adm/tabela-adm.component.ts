import { Component, OnInit } from '@angular/core';
import { Table } from './table';
import { TableService } from './table.service';

@Component({
  selector: 'app-tabela-adm',
  templateUrl: './tabela-adm.component.html',
  styleUrls: ['./tabela-adm.component.scss']
})
export class TabelaAdmComponent implements OnInit {

  tabela:Table[]=[]

  constructor(private service: TableService) { }

  ngOnInit(): void {
    this.service.listarTable().subscribe((event)=>{
      this.tabela = event.result as Table[]
      console.log(this.tabela)
    })
  }

}

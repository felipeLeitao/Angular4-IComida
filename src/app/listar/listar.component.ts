import { Component, OnInit } from '@angular/core';
import { Produto } from './produto.model'
import { ListarService} from './listar.service'

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: []
})
export class ListarComponent implements OnInit {

  produtos: Produto[]

  constructor(private servico: ListarService) { }

  ngOnInit() {
    this.servico.produtos().subscribe(_ => this.produtos = _)
  }

}

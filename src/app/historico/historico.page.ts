import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {

  public arrayProduto: any

  constructor(private produtosService : ProdutosService) { }

  ngOnInit() {
    this.produtosService.listarTodos().then(arrayProduto => {this.arrayProduto = arrayProduto})
  }

}

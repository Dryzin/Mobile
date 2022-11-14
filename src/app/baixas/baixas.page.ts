import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-baixas',
  templateUrl: './baixas.page.html',
  styleUrls: ['./baixas.page.scss'],
})
export class BaixasPage implements OnInit {

  public arrayProduto: any

  produto: string
  tipo: string
  quantidade: number


  constructor(private produtosService : ProdutosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.produtosService.listarTodos().then(arrayProduto => {this.arrayProduto = arrayProduto})
  }

  atualizar(){

    if (this.tipo == "delet")

      this.produtosService.deletaDados(this.produto)

      this.router.navigate(['/baixas']).then (() => { window.location.reload()});

    if (this.tipo == "entrada")
      this.produtosService.AlterarP(this.produto, this.arrayProduto ,this.quantidade)

}


}

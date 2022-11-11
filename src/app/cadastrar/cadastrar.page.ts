import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Produto } from '../models/produto.model';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  private produto: Produto
  public produtoForm : FormGroup
  public arrayProduto: any
  public progress = 0

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private produtosService: ProdutosService) {
  }

  ngOnInit() {

    this.produtosService.listarTodos().then(arrayProduto => {this.arrayProduto = arrayProduto})

    this.produto = {id: Guid.createEmpty(), nome:"", valor: "", quant: ""}

    this.produtoForm = this.formBuilder.group
    ({
      id : [this.produto.id],
      nome : [this.produto.nome, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])],
      valor : [this.produto.valor],
      quant : [this.produto.quant]

    })
  }

  enviar(){
    if (this.produtoForm.valid)
      this.produtosService.recebeDados(this.produtoForm.value)

      setInterval(() => {
        this.progress += 0.06;

        if (this.progress > 1) {
          setTimeout(() => {
            this.progress = 0;
            this.router.navigate(['/cadastrar']).then (() => { window.location.reload()});

          }, 1000);
        }
      }, 50);
  }

}

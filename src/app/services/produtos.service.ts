import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';
import { Guid} from 'guid-typescript';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor( private storage: Storage) { }

  recebeDados(dadosRecebidos : Produto){
    dadosRecebidos.id = Guid.create()
    this.storage.set(dadosRecebidos.id.toString(), JSON.stringify(dadosRecebidos))
  }

  async listarTodos(){
    let arrayProduto: Produto [] = [];

    this.storage.forEach((value: string) =>
      {const produto: Produto = JSON.parse(value); arrayProduto.push(produto)})

    return arrayProduto;
  }

  AlterarP(id: string, dadosRecebidos: Produto , quantidade: number){

    dadosRecebidos.id = Guid.parse(id)

    const a = Number(dadosRecebidos.quant) + quantidade

    dadosRecebidos.quant = a.toString()

    this.storage.set(dadosRecebidos.id.toString(), JSON.stringify(dadosRecebidos))

  }

  add(id: string, quant: number){

    this.storage.set(id, quant)

  }


  deletaDados(id : string){
    this.storage.remove(id)
  }

}

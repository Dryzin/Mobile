import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  entrada : string
  saida : string

  constructor() {}

  submit(){
    var ent = this.entrada
    this.saida = ent.toString()

  }

}

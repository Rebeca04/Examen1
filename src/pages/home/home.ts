import { ListaPage } from './../lista/lista';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contador : number = 0;

  paginaLista: any = ListaPage;
  constructor(public navCtrl: NavController) {

  }

  boton1(){
    this.contador++;
  }
}

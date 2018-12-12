import { ListaPage } from './../lista/lista';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contador : number = 0;
  mostrarB4 : boolean = false;

  paginaLista: any = ListaPage;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  boton1(){
    this.contador++;
    if (this.contador>=5) {this.mostrarB4 = true}
  }
  
  boton3(){
    let toast = this.toastCtrl.create({
      message: 'Rebeca',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}

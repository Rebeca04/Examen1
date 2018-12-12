import { ListaPage } from './../lista/lista';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public contador : number = 1;
  mostrarB4 : boolean = false;

  paginaLista: any = ListaPage;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public loadingCtrl: LoadingController) {

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

  boton5(){
    this.navCtrl.push(ListaPage);
    const loader = this.loadingCtrl.create({
      content: "Cargando ...",
      duration: 2000
    });
    loader.present();
  }
}

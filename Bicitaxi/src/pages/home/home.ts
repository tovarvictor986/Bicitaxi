import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  registrarse(){
    this.navCtrl.push(RegistroPage);
  }

  loguearse(){
    this.navCtrl.push(LoginPage);
  }


}

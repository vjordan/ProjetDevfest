import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { PresentateursPage } from '../presentateurs/presentateurs';
import { SessionsPage } from '../sessions/sessions';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {
  }

  goToPresentateurs() {
    this.navCtrl.push(PresentateursPage);
  }

  goToSessions() {
      this.navCtrl.push(SessionsPage);
    }

}

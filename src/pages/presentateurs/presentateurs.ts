import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { PresentateurPage } from '../presentateur/presentateur';

@Component({
  selector: 'page-presentateurs',
  templateUrl: 'presentateurs.html'
})
export class PresentateursPage {

  private baseUrl = "https://devfest-nantes-2018-api.cleverapps.io/speakers";
  private presentateurs;

  constructor(public navCtrl: NavController, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.http.get(this.baseUrl).subscribe(data => {
               this.presentateurs = Object.keys(data).map(i => data[i]);
             });
  }

  openPresentateurPage(presentateur: any) {
    this.navCtrl.push(PresentateurPage,{presentateur: presentateur});
  }

}

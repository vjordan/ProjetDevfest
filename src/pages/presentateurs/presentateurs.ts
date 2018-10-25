import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
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

<<<<<<< HEAD
  openPresentateurPage(presentateur: any) {
    this.navCtrl.push(PresentateurPage,{presentateur: presentateur});
  }
=======
  openPresentateurPage() {
          this.navCtrl.push(PresentateurPage);
      }

>>>>>>> 4885cc8f869f60eed7c7b0d6d5379c13c3cb22b3

}

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

  constructor(public navCtrl: NavController, private http: HttpClient) {
  }
  private baseUrl = "https://devfest-nantes-2018-api.cleverapps.io/speakers";
  private presentateurs;

  ngOnInit(): void {
    this.http.get(this.baseUrl).subscribe(data => {
               this.presentateurs = Object.keys(data).map(i => data[i]);
             });
  }

  openPresentateurPage() {
          this.navCtrl.push(PresentateurPage);
      }


}

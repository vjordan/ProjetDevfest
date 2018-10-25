import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PresentateurPage } from '../presentateur/presentateur';

@Component({
  selector: 'page-session',
  templateUrl: 'session.html'
})
export class SessionPage {

  session: any;
  presentateurs: any;
  private baseUrl = "https://devfest-nantes-2018-api.cleverapps.io/speakers";

  constructor(public navCtrl: NavController, private http: HttpClient, public navParams: NavParams) {
    this.session = navParams.get('session');
  }

  ngOnInit(): void {
    if (!(this.session.speakers == undefined)) {
      this.http.get(this.baseUrl).subscribe(data => {
        this.presentateurs = Object.keys(data).filter(i => this.session.speakers.indexOf(Number.parseInt(i))>-1).map(i => data[i]);
      });
    }
  }

  openPresentateurPage(presentateur: any) {
    this.navCtrl.push(PresentateurPage,{presentateur: presentateur});
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-sessions',
  templateUrl: 'sessions.html'
})
export class SessionsPage {

  constructor(public navCtrl: NavController, private http: HttpClient) {

  }
  private baseUrl = "https://devfest-nantes-2018-api.cleverapps.io/sessions";

  sessions = Array.from(this.http.get(this.baseUrl)
    .subscribe(res => {
        console.log(res);
      }));




}

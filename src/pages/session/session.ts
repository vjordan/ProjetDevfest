import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-session',
  templateUrl: 'session.html'
})
export class SessionPage {


  constructor(public navCtrl: NavController, private http: HttpClient) {

  }
    ngOnInit(): void {

    }



}

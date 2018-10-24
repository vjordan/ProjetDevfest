import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-presentateur',
  templateUrl: 'presentateur.html'
})
export class PresentateurPage {

  constructor(public navCtrl: NavController, private http: HttpClient) {
  }

  ngOnInit(): void {

  }


}

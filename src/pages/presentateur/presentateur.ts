import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { SessionPage } from '../session/session';


@Component({
  selector: 'page-presentateur',
  templateUrl: 'presentateur.html'
})
export class PresentateurPage {

  presentateur: any;
  sessions: any;
  private baseUrl = "https://devfest-nantes-2018-api.cleverapps.io/sessions";

  constructor(public navCtrl: NavController, private http: HttpClient, private contacts: Contacts, public navParams: NavParams) {
    this.presentateur = navParams.get('presentateur');
  }

  ngOnInit(): void {
      this.http.get(this.baseUrl).subscribe(data => {
        this.sessions = Object.keys(data).map(i => data[i]).filter(i => i.speakers == undefined ? false : i.speakers.indexOf(Number.parseInt(this.presentateur.id))>-1);
      });
  }

  openSessionPage(session: any) {
    this.navCtrl.push(SessionPage,{session: session});
  }

  addContact() {
      let contact: Contact = this.contacts.create();
      contact.name = new ContactName(null, 'Smith', 'John');
      contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
      contact.save().then(
        () => console.log('Contact saved!', contact),
        (error: any) => console.error('Error saving contact.', error)
      );
  }

}

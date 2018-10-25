import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';


@Component({
  selector: 'page-presentateur',
  templateUrl: 'presentateur.html'
})
export class PresentateurPage {

  constructor(public navCtrl: NavController, private http: HttpClient,private contacts: Contacts) {
  }

  ngOnInit(): void {

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

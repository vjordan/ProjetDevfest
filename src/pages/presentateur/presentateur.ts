import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Contacts, Contact, ContactName } from '@ionic-native/contacts';
import { SessionPage } from '../session/session';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-presentateur',
  templateUrl: 'presentateur.html'
})
export class PresentateurPage {

  presentateur: any;
  sessions: any;
  private baseUrl = "https://devfest-nantes-2018-api.cleverapps.io/sessions";

  constructor(public navCtrl: NavController, private http: HttpClient, private contacts: Contacts, public navParams: NavParams, private alertCtrl: AlertController) {
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
      console.log(this.contacts);
      const contact: Contact = this.contacts.create();
      console.log(contact);
      const presentateurName = this.presentateur.name.split(' ');
      contact.name = new ContactName(null, presentateurName[1], presentateurName[0]);
      contact.save().then(
        () => console.log('Contact saved!', contact),
        (error: any) => console.error('Error saving contact.', error)
      );
      this.alerteEnregistrement();
  }

  alerteEnregistrement() {
    let alert = this.alertCtrl.create({
      title: 'Nouveau contact',
      subTitle: 'Cette personne est maintenant dans votre liste de contacts.',
      buttons: ['OK']
    });
    alert.present();
  }

}

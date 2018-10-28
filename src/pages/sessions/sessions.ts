import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SessionPage } from '../session/session';

@Component({
  selector: 'page-sessions',
  templateUrl: 'sessions.html'
})
export class SessionsPage {

  private baseUrl = "https://devfest-nantes-2018-api.cleverapps.io/sessions";
  private sessions;

  constructor(public navCtrl: NavController, private http: HttpClient) {

  }
    ngOnInit(): void {
      this.http.get(this.baseUrl).subscribe(data => {
                 this.sessions = Object.keys(data).map(i => data[i]);
               });
    }

    openSessionPage(session: any) {
        this.navCtrl.push(SessionPage,{session: session});
    }
}

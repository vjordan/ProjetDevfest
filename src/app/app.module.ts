import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SessionsPage } from '../pages/sessions/sessions';
import { PresentateursPage } from '../pages/presentateurs/presentateurs';
import { NotesPage } from '../pages/notes/notes';
import { TelephonePage } from '../pages/telephone/telephone';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SessionsPage,
    //PresentateursPage,
    //NotesPage,
    TelephonePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SessionsPage,
    //PresentateursPage,
    //NotesPage,
    TelephonePage
  ]

})
export class AppModule {}

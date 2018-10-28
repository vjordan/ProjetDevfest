import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import {Camera} from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { Contacts } from '@ionic-native/contacts';
import { IonicStorageModule } from '@ionic/storage';
import { File } from '@ionic-native/file';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SessionsPage } from '../pages/sessions/sessions';
import { SessionPage } from '../pages/session/session';
import { PresentateursPage } from '../pages/presentateurs/presentateurs';
import { PresentateurPage } from '../pages/presentateur/presentateur';
import { NotesPage } from '../pages/notes/notes';
import { TelephonePage } from '../pages/telephone/telephone';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SessionsPage,
    PresentateursPage,
    NotesPage,
    TelephonePage,
    SessionPage,
    PresentateurPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientModule,
    Camera,
    ImagePicker,
    Contacts,
    File
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SessionsPage,
    PresentateursPage,
    NotesPage,
    TelephonePage,
    SessionPage,
    PresentateurPage
  ]

})
export class AppModule {

}

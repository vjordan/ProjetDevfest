import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Camera} from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import { File } from '@ionic-native/file';


@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage {
  base64Image:string;
  session: any;
  notesSession:string = "";
  storageNotes:string = "devfest_session_notes_";
  storageImg:string = "devfest_session_img_";

  constructor(public navCtrl: NavController, private camera: Camera, private imagePicker: ImagePicker, public navParams: NavParams,private storage: Storage, private file: File, private alertCtrl: AlertController) {
    this.session = navParams.get('session');
  }

  ngOnInit(): void {
    this.storage.get(this.storageNotes+this.session.id).then((res) => {
      if (res != null) {
        this.notesSession = res;
      }
    }
    ).catch((err) => {
      console.log(err);
    });

    this.storage.get(this.storageImg+this.session.id).then((res) => {
      if (res != null) {
        this.base64Image = res;
      }
    }
    ).catch((err) => {
      console.log(err);
    });
  }

  takePicture(){
      this.camera.getPicture({
          destinationType:  this.camera.DestinationType.DATA_URL,
          targetWidth: 1000,
          targetHeight: 1000
      }).then((imageData) => {
        this.base64Image =  "data:image/jpeg;base64," + imageData;

      }, (err) => {
          console.log(err);
      });
    }

  getPictures(){
    const options : ImagePickerOptions = {
        maximumImagesCount: 1
      };
    this.imagePicker.getPictures(options).then((results) => {
        let filename = results[0].substring(results[0].lastIndexOf('/')+1);
        let path =  results[0].substring(0,results[0].lastIndexOf('/')+1);
        this.file.readAsDataURL(path, filename).then(res => {
          this.base64Image = res;
        });
     }, (err) => { });
  }

  saveNotes(){
    console.log(this.notesSession);
    this.storage.set(this.storageNotes + this.session.id, this.notesSession);
    this.storage.set(this.storageImg + this.session.id, this.base64Image);
    this.alerteEnregistrement();
  }

  alerteEnregistrement() {
    let alert = this.alertCtrl.create({
      title: 'Enregistrement effectué',
      subTitle: 'Vos notes et photos ont été enregistrées',
      buttons: ['OK']
    });
    alert.present();
  }
}

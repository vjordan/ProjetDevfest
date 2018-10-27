import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';


@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',

})
export class NotesPage {
  base64Image:string;
  session: any;
  notesSession:string;

  constructor(public navCtrl: NavController, private camera: Camera, private imagePicker: ImagePicker, public navParams: NavParams) {
    this.session = navParams.get('session');
  }

  takePicture(){
      this.camera.getPicture({
          destinationType:  this.camera.DestinationType.DATA_URL,
          targetWidth: 1000,
          targetHeight: 1000
      }).then((imageData) => {
        // imageData is a base64 encoded string
          this.base64Image = "data:image/jpeg;base64," + imageData;
      }, (err) => {
          console.log(err);
      });
    }

  getPictures(){
    const options : ImagePickerOptions = {
        maximumImagesCount: 1
      };
    this.picker.getPictures(options).then((results) => {
      console.log(results[0]);
      this.base64Image =results[0];
     }, (err) => { });
  }
}

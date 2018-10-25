import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';


@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',

})
export class NotesPage {
  base64Image:string;

  constructor(public navCtrl: NavController, private camera: Camera, private imagePicker: ImagePicker) {

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
    this.imagePicker.getPictures({
      maximumImagesCount: 1
    }).then((results) => {
       for (var i = 0; i < results.length; i++) {
           console.log('Image URI: ' + results[i]);
           this.base64Image =results[i];
       }
     }, (err) => { });
  }
}

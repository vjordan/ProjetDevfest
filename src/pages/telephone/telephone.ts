import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { Network } from '@ionic-native/network';
import {Platform} from 'ionic-angular';



@Component({
  selector: 'page-telephone',
  templateUrl: 'telephone.html',
  providers: [ Device , Network ]
})
export class TelephonePage {
  private model;
  private device_platform;
  private uuid;
  private version;
  private connection = this.network.type;

  constructor(public navCtrl: NavController, private device: Device, private network: Network, private platform: Platform) {
    platform.ready().then(() => {
      this.model = device.model;
      this.device_platform = device.platform;
      this.uuid = device.uuid;
      this.version = device.version;
    });
  }

}

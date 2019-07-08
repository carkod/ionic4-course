import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Device } from '@ionic-native/device/ngx';

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage {

  constructor(
    private platform: Platform,
    private device: Device
  ) { }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      console.log('Device UUID is: ' + this.device.uuid);
    });
    console.log('ionViewDidLoad DevicePage');
  }

}

import { FlashlightService } from './../services/flashlight.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  user: any;
  login: string;

  constructor(
    private _navCtrl: NavController,
    private _light: FlashlightService
  ) {}

  goToProfile(param: string) {
    this._navCtrl.navigateForward(`profile/${param}`);
  }

  toogleFlashlight() {
    this._light.toogle();
  }
}

import { FlashlightService } from './../services/flashlight.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GithubService } from '../services/github.service';
import { ToastServiceService } from '../services/toast-service.service';


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
    private _githubService: GithubService,
    private _light: FlashlightService,
    private _toast: ToastServiceService
  ) {}

  async goToProfile(param: string) {
    this._githubService.getUser(param).subscribe( (data) => {
      this.user = data;
      this._githubService.user = this.user;
      this._navCtrl.navigateForward(`profile/${param}`);
    }, (err) => {
      console.log('ERROR');
      this._toast.make(`User ${param} doesn't exist.`);
    });
  }

  toogleFlashlight() {
    this._light.toogle();
  }
}

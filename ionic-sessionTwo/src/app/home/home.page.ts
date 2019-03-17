import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  user: any;
  login: string;

  constructor(private _github: GithubService, private _navCtrl: NavController) {}

  goToProfile(param: string){
    this._navCtrl.navigateForward(`profile/${param}`);  }

}

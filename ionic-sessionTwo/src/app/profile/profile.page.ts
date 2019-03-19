import { GithubService } from './../services/github.service';
import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {
  user: any;
  http: any;
  login: string;
  constructor(
    private _githubService: GithubService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.login = this._activatedRoute.snapshot.paramMap.get('login');
  }
  getUser() {
    this.user = this._githubService.user();
  }
}

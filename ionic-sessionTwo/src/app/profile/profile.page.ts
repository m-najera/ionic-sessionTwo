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
  login: string;
  constructor(
    private _github: GithubService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.login = this._activatedRoute.snapshot.paramMap.get('login');
    this.getUser(this.login);
  }
  getUser(login: string) {
    this._github.getUser(login).subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.log('Not Found');
        this.user = {
          name: 'Not Found',
          avatar_url:
            'https://cdn-images-1.medium.com/max/1200/1*wUOrpv-selJOytCkslSIhg.png',
          bio: 'Error 404'
        };
      }
    );
  }
}

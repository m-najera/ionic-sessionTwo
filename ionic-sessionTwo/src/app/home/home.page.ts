import { Component } from "@angular/core";
import { GithubService } from "../services/github.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  user: any;
  login: string;

  constructor(private _github: GithubService) {}

  getUser(login: string) {
    this._github.getUser(login).subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.log("Not Found");
        this.user = undefined;
      }
    );
  }
}

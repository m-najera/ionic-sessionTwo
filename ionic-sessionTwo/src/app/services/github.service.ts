import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private _httpClient: HttpClient) {  }
  private user: any;

  getUser(name: string) {
    return this._httpClient.get(`https://api.github.com/users/${name}`);
  }
}

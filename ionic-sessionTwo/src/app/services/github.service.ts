import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private _httpClient: HttpClient) {  }
  public user: any;
  private http: any;

  getUser(name: string): Observable<any> {
    // return this._httpClient.get(`https://api.github.com/users/${name}`);
    return this._httpClient.get(`https://reqres.in/api/users/${name}`);
  }
}

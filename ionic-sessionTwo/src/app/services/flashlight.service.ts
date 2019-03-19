import { Injectable } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Injectable({
  providedIn: 'root'
})
export class FlashlightService {

  constructor(
    private _flashlight: Flashlight) { }

    toogle(){
      this._flashlight.toggle();
    }

}

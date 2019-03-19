import { Injectable } from '@angular/core';
import { Toast } from '@ionic-native/toast/ngx';

@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {

  constructor(private _toast: Toast) { }

  make(param: string) {
    this._toast.show(param, '500', 'center');
    console.log('HOLA');
  }

}

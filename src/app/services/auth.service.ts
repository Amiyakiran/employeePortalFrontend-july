import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  islogged(){
    /* boolean value */
   return !!localStorage.getItem("name")
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles:[]){
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles() : []{
    var rles = localStorage.getItem('roles');
      return JSON.parse(rles||JSON.stringify([]));      
  }

  public setToken(token : String){
    localStorage.setItem('token', JSON.stringify(token));
  }

  public getToken(){
    return localStorage.getItem('token');
  }

  public clear(){
    localStorage.clear();
  }

  public isLoggedIn(){
    return this.getRoles() && this.getToken() ;
  }

}


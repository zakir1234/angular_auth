import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaderResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  BASE_URL = "http://localhost:9090";

  public login(loginData:any){
    return this.httpClient.post<any>(this.BASE_URL + '/authenticate',loginData);
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var $: any;  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private userService: UserService, userAuthService : UserAuthService, private httpClient : HttpClient){}



  ngOnInit() {  
    // if((this.userAuthService.isLoggedIn()) )     {  
    //     this.router.navigate(['/profile' , localStorage.getItem('id')]);  
    // }  
    // else  
    // {  
    //     this.router.navigate(['/login']);  
    // }  


  }


  login(loginForm:NgForm){
    var settings = {
      "url": "http://localhost:9090/oauth/token",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic c3ByaW5nLWJvb3QtcmVzdC1yZWFkLXdyaXRlLWNsaWVudDoxMjM="
      },
      "data": {
        "client_id": "spring-boot-rest-read-write-client",
        "grant_type": "password",
        "username": "admin",
        "password": "123"
      }
    };
    
    $.ajax(settings).done(function (response:any) {
      console.log(response);
    });
   
  }

}

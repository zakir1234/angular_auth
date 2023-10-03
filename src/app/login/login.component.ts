import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private userService: UserService, userAuthService : UserAuthService){}



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
    this.userService.login(loginForm.value).subscribe(
      response => {
        console.log(response);
  
      }
    );
  }

}

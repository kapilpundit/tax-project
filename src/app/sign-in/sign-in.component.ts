import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  username:string;
  password:string;
  
  constructor(private router:Router, 
    private recaptchaV3Service: ReCaptchaV3Service) { }

  ngOnInit() {
  }

  recaptchaCode(): void {
    this.recaptchaV3Service.execute('importantAction')
      .subscribe((token) => console.log(token));
  }

  login(){
    this.recaptchaCode();

    if(this.username === '' && this.password === ''){
      alert("Please enter Username and Password");
      return;
    }else if(this.username === 'admin' && this.password === 'admin'){
      this.router.navigate(['/dashboard']);
    }else{
      alert("Invalid Username or Password");
      return;
    }
  }
  
}

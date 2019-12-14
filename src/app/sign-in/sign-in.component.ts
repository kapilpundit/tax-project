import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  username:string;
  password:string;
  constructor(private router:Router) { }

  ngOnInit() {

  }

  login(){
    console.log("sdsd")
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

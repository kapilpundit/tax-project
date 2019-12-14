import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  username:string;
  password:string;
  @ViewChild('recaptcha', {static: true }) recaptchaElement: ElementRef;
  
  constructor(private router:Router) { }

  ngOnInit() {
    this.addRecaptchaScript();
  }

  login(){
    // console.log("sdsd")
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

  addRecaptchaScript() {
 
    window['grecaptchaCallback'] = () => {
      this.renderReCaptcha();
    }
   
    (function(d, s, id, obj){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { obj.renderReCaptcha(); return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'recaptcha-jssdk', this));
   
  }

  renderReCaptcha() {
    window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
      'sitekey' : '6LezuMcUAAAAAHLp83eUAZhdCNE862obFxlTiRc4',
      'callback': (response) => {
          console.log(response);
      }
    });
  }

}

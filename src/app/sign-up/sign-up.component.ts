import { Component, OnInit } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private recaptchaV3Service: ReCaptchaV3Service
  ) { }

  ngOnInit() {
  }

  recaptchaCode(): void {
    this.recaptchaV3Service.execute('importantAction')
      .subscribe((token) => console.log(token));
  }

  register() {
    this.recaptchaCode();
  }

}

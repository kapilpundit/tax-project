import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';

declare var $:any;
declare var jQuery:any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, AfterViewInit {
  username:string;
  password:string;
  
  constructor(private router:Router, 
    private recaptchaV3Service: ReCaptchaV3Service) { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    (function ($) {
      "use strict";

      /*==================================================================
      [ Focus input ]*/
      $('.input100').each(function(){
          $(this).on('blur', function(){
              if($(this).val().trim() != "") {
                  $(this).addClass('has-val');
              }
              else {
                  $(this).removeClass('has-val');
              }
          })    
      })


      /*==================================================================
      [ Validate ]*/
      var input = $('.validate-input .input100');

      $('.validate-form').on('submit',function(){
          var check = true;

          for(var i=0; i<input.length; i++) {
              if(validate(input[i]) == false){
                  showValidate(input[i]);
                  check=false;
              }
          }

          return check;
      });


      $('.validate-form .input100').each(function(){
          $(this).focus(function(){
            hideValidate(this);
          });
      });

      function validate (input) {
          if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
              if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                  return false;
              }
          }
          else {
              if($(input).val().trim() == ''){
                  return false;
              }
          }
      }

      function showValidate(input) {
          var thisAlert = $(input).parent();

          $(thisAlert).addClass('alert-validate');
      }

      function hideValidate(input) {
          var thisAlert = $(input).parent();

          $(thisAlert).removeClass('alert-validate');
      }
      
      /*==================================================================
      [ Show pass ]*/
      var showPass = 0;
      $('.btn-show-pass').on('click', function(){
          if(showPass == 0) {
              $(this).next('input').attr('type','text');
              $(this).find('i').removeClass('zmdi-eye');
              $(this).find('i').addClass('zmdi-eye-off');
              showPass = 1;
          }
          else {
              $(this).next('input').attr('type','password');
              $(this).find('i').addClass('zmdi-eye');
              $(this).find('i').removeClass('zmdi-eye-off');
              showPass = 0;
          }
          
      });


    })(jQuery);
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

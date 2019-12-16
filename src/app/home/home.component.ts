import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var jQuery:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
  
       //>=, not <=
      if (scroll >= 500) {
          //clearHeader, not clearheader - caps H
          $(".top-bar").removeClass("top-bar--top");
      }else{
        $(".top-bar").addClass("top-bar--top");
      }
  }); //missing );
  }

}

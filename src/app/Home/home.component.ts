import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  biz: string;
  phone: string;
  code: string;
  

  constructor() {
    this.phone = "./assets/images/phone.jpeg";
    this.biz = "./assets/images/biz.jpeg";
    this.code =  "./assets/images/code.jpeg";
  }

  ngOnInit() {
  }

}

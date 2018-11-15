import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showContent = false;

  constructor() { }

  ngOnInit() {
  }

  isActiveFunction() {
    document.getElementById("hamburger-1").classList.toggle("is-active");
    if (this.showContent) {
      this.showContent = false;
      //show content
      console.log("ShowContent", this.showContent);
    }
    else {
      this.showContent = true;
      //hide content
      console.log("ShowContent", this.showContent);
    }

  }


}

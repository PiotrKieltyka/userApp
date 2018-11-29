import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'App';
  isLoggedIn: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

  logout() {
    if (this.isLoggedIn) { this.isLoggedIn = false; }
  }
}

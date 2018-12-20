import { AuthService } from './../shared/auth.service';
import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

@Injectable()
export class HeaderComponent implements OnInit {
  title = 'App';
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
  userIn = 'Stranger';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.isLoggedOut$ = this.authService.isLoggedOut$;
    this.authService.user$.subscribe(res => this.userIn = res.firstName);
  }

  logout() {
    this.authService.signout().subscribe(
      res => this.router.navigateByUrl('/home'),
      error => console.log(error)
    );
  }

}

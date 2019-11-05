import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from './../../services/token.service';
import { UserAuthService } from './../../services/user-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn: boolean;

  constructor(
    private Auth: AuthService,
    private router: Router,
    private Token: TokenService,
    private userAuth: UserAuthService
  ) { }

  ngOnInit() {
    this.Auth.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.Token.remove();
    this.userAuth.removeUser();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

}

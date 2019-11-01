import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { JarwisService } from '../../services/jarwis.service';
// import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { ConditionalExpr } from '@angular/compiler';
// import { AuthService } from '../../services/auth.service';
import { AuthServiceService } from './../../services/auth-service.service';
import { TokenService } from './../../services/token.service';
import { AuthService } from './../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };

  public error = null;

  constructor(
    private authService: AuthServiceService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
  ) { }

  onSubmit() {

    return this.authService.login(this.form).subscribe(
      data => { this.handleResponse(data); console.log(data) },
      error => {this.handleError(error)}
    );

  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error) {
    this.error = error.error.error;
    console.log(this.error);
  }
  ngOnInit() {
  }

}

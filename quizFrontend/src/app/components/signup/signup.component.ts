import { Component, OnInit } from '@angular/core';

// import { Component, OnInit } from '@angular/core';
// import { JarwisService } from '../../services/jarwis.service';
// import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from './../../services/auth-service.service';
import { TokenService } from './../../services/token.service';
import { AuthService } from './../../services/auth.service';
import { UserAuthService } from './../../services/user-auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    email: null,
    name: null,
    password: null,
    role_id: null
  };
  public error = [];

  constructor(
    private authService: AuthServiceService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    private authUser: UserAuthService
  ) { }

  onSubmit() {
    return this.authService.register(this.form).subscribe(
      data => { this.handleResponse(data) },
      err => { this.handleError(err) }
    );

  }
  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.authUser.setUser(data['user']);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error) {
    this.error = error.error;
    console.log(this.error);
  }

  ngOnInit() {
  }

}

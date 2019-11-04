import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { InedxComponent } from './components/inedx/inedx.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PraciceComponent } from './components/pracice/pracice.component';



const routes: Routes = [

  { path: "login", component: LoginComponent, canActivate: [BeforeLoginService] },
  { path: "signup", component: SignupComponent, canActivate: [BeforeLoginService] },
  { path: "profile", component: ProfileComponent, canActivate: [AfterLoginService] },
  { path: "quizzes/:id/edit", component: InedxComponent, canActivate: [AfterLoginService] },
  { path: "quizzes/create", component: InedxComponent, canActivate: [AfterLoginService] },
  { path: "quizzes/:id/practice", component: PraciceComponent, canActivate: [AfterLoginService] },
  { path: "**", component: NotFoundComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }

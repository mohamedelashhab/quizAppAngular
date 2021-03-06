import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthServiceService } from './services/auth-service.service';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { UserAuthService } from './services/user-auth.service';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuestationComponent } from './components/questation/questation.component';
import { AnswerComponent } from './components/answer/answer.component';
import { ArchwizardModule } from 'angular-archwizard';
import { InedxComponent } from './components/inedx/inedx.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PraciceComponent } from './components/pracice/pracice.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { ResultComponent } from './components/result/result.component';
import { TimeAgoPipe } from 'time-ago-pipe';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    QuizComponent,
    QuestationComponent,
    AnswerComponent,
    InedxComponent,
    NotFoundComponent,
    PraciceComponent,
    EvaluationComponent,
    ResultComponent,
    TimeAgoPipe
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ArchwizardModule
  ],
  providers: [AuthServiceService, TokenService, AuthService, BeforeLoginService, AfterLoginService, UserAuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

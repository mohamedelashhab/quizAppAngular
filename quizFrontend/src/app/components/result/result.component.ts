import { Component, OnInit, Input } from '@angular/core';
import { UserAuthService } from './../../services/user-auth.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input('grade') grade : number ;
  @Input('quizName') quizName : string ;
  @Input('num') num : number ;
  user: any ;

  constructor(private userAuth: UserAuthService) { }

  ngOnInit() {
    this.user = this.userAuth.user;
  }

}

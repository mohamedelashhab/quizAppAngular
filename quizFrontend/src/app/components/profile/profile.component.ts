import { Component, OnInit } from '@angular/core';
import { QuizService } from './../../services/quiz.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  //not published quizzes
  quizzes: any[];

  constructor(private quizService: QuizService) { }

  ngOnInit() {

    //get not published quizzes
    this.quizService.getQuizzes(false).subscribe(
      (data) => { console.log(data); this.quizzes = data ;}
    );


  }


  //edit to publish quiz
  edit(quizId)
  {
    //navigate to quiz component
    
  }

}

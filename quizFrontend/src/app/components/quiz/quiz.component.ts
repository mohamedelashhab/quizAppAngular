import { Component, OnInit, Input } from '@angular/core';
import { UserAuthService } from './../../services/user-auth.service';
import { QuizService } from './../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  @Input('quizId') quizId: number = null;

  quiz:any = {
    id: null,
    name: null,
    num:null,
    questations: []
  }

  counter()
  {
    return Array(Number(this.quiz.num)).fill(0).map((e, i) => i + 1);
  }
   
  constructor(
    private quizService: QuizService
  ) { }

  ngOnInit() {
    // get quiz
    if(this.quizId)
    {
      this.quizService.getQuiz(this.quizId).subscribe(
        (data) => {
          this.quiz = data;
          console.log(this.quiz.questations);
        }
      );
    }
    


  }

  onSubmit() {

    //edit
    // if(this.quiz.id != null)

    //add
    if(this.quiz.id == null){
      this.quizService.createQuiz(this.quiz).subscribe(
        (data) => { this.quiz.id = data['id']; console.log(data) }
      );
    }
    
  }


  

}

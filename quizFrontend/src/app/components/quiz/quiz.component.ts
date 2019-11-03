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
  count: number = 0;
  publishable: boolean = false;

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
          this.count = data['questations'].length;
          this.count = data['num'];
          this.quiz = data;
          this.canPublish();
          console.log(data);
  
        }
      );
    }
    


  }
  canPublish() {
    console.log(this.count, this.quiz.num);
    if (this.count == this.quiz.num) {
      this.publishable = true;
    } else {
      this.publishable = false;
    }
  }

  onSubmit() {

    //edit
    // if(this.quiz.id != null)

    
    if(this.quiz.id == null){
      //add
      this.quizService.createQuiz(this.quiz).subscribe(
        (data) => { this.quiz.id = data['id']; console.log(data) }
      );
    }
    else{
      //edit
      this.quizService.editQuiz(this.quiz, this.quiz.id).subscribe(
        (data) => {console.log(data)}
      );
    }
    
  }

  publish()
  {
    console.log(this.quiz.id);
    //publish
    
  }


  countable(){
    this.count++;
    this.canPublish();
    console.log("count" + this.count);
  }




}

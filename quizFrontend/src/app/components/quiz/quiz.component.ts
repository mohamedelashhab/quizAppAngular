import { Component, OnInit, Input } from '@angular/core';
import { UserAuthService } from './../../services/user-auth.service';
import { QuizService } from './../../services/quiz.service';
import { Router } from '@angular/router';

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
    published:0,
    questations: []
  }

  counter()
  {
    return Array(Number(this.quiz.num)).fill(0).map((e, i) => i + 1);
  }
   
  constructor(
    private quizService: QuizService, private router: Router
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
    //publish
    this.quiz.published = true;
    this.quizService.publishQuiz(this.quiz, this.quiz.id).subscribe(
      (data) => { this.publishable = false;
        this.navigateToHome();
      }
    );
  }


  countable(){
    this.count++;
    this.canPublish();
    console.log("count" + this.count);
  }

  navigateToHome(){
    this.router.navigate(['/profile']);
  }

  saveForLater()
  {
    this.onSubmit();
    this.navigateToHome();
  }




}

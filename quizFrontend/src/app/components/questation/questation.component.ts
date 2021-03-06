import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { QuizService } from './../../services/quiz.service';

@Component({
  selector: 'app-questation',
  templateUrl: './questation.component.html',
  styleUrls: ['./questation.component.css']
})
export class QuestationComponent implements OnInit {

  @Input('quiz') quizId : number;
  @Input('InputQuestation') InputQuestation : any = null;
  @Output() added = new EventEmitter();


  creatable:boolean = true;
  oldCorrectAnswer: number = null;
  
  
  is_correct: number;
  answers: any[] = [
    { id: null, body: '', questation_id: '' , is_correct:false },
    { id: null, body: '', questation_id: '' , is_correct:false },
    { id: null, body: '', questation_id: '' , is_correct:false },
    { id: null, body: '', questation_id: '' , is_correct:false },
  ] ;
  questation: any = {
    id: null, 
    body: '',
  } ;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    // git quiz 
    if(this.InputQuestation){
      this.creatable = false;
      this.questation = this.InputQuestation;
      console.log(this.questation);

      console.log(this.questation.body);
      let i = 0;
      this.questation.answers.forEach(e => {
        this.answers[i] = e;
        if (e.is_correct == true) { this.is_correct = i; this.oldCorrectAnswer = i;console.log(this.oldCorrectAnswer) }
        i++;
      });
      if(!this.oldCorrectAnswer){
        this.oldCorrectAnswer = 1;
        this.is_correct = 1;

      }
      i = 0;
    }
    else{
      this.creatable = true;
    }
    
 
  }

  onSubmit()
  {

    if(!this.questation.id){
      //submit the questation and get id
      this.quizService.createQuestation(this.questation, this.quizId).subscribe(
        (data) => {
          this.added.emit();
          this.questation = data;
          //submit answers
          this.submitAnswers(data);

        }
      );
    }
    else{
      // edit
      this.quizService.editQuestation(this.questation, this.questation.id).subscribe(
        (data)=> {
          this.editAnswers();
        }
      );

    }
    


    
    
    
  }
  editAnswers() {
    console.log(this.oldCorrectAnswer);
    this.answers[this.is_correct].is_correct = true;
    this.answers[this.oldCorrectAnswer].is_correct = false;
    this.answers.forEach(e => {
      this.quizService.editAnswer(e, e.id).subscribe(
        (data) => console.log(data)
      );
    });
  }
  submitAnswers(data: Object) {
    this.answers[this.is_correct].is_correct = true;
    this.answers.forEach(e => {
      this.quizService.createAnswers(e, data['id']).subscribe(
        (data) => console.log(data)
      );
    });
    this.creatable = false;
  }

}

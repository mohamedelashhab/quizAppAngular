import { Component, OnInit, AfterViewInit, AfterContentChecked, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from './../../services/quiz.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-pracice',
  templateUrl: './pracice.component.html',
  styleUrls: ['./pracice.component.css']
})
export class PraciceComponent implements OnInit {
 
  
  // properties
  quizId: number = null;
  quiz: any = null;
  questations: any[] = [];
  counter: number;
  renderable: boolean = false;
  choosedAnswers : boolean [] = [false];
  finallGrade = 0;
  canEvaluate = false;
  result: boolean = false;
  // end properties

  constructor(private route:ActivatedRoute, private router:Router, private quizService: QuizService) {
 

   }

  ngOnInit() {
    //get id from uri
    this.route.paramMap.subscribe(params => {
      // guard
    
      if (params.params.id) {
        this.quizId = params.params.id;
        this.quizService.getQuiz(params.params.id).subscribe(
          (data) => {
            this.renderable = 1;

            // console.log(data);
            if (!data.published) this.router.navigate(['404']);
            this.setValues(data);


          },
          (error) => {
            this.router.navigate(['404']);
          }
        );

      }
      
      else {
        this.router.navigate(['404']);

      }

    });
  
  }


  setValues(data: Object) {
    this.quiz = data;
    this.questations = data.questations;
    this.counter = data.num;
    this.renderable = data['num'];
    console.log(this.questations);
  }

  startQuiz(){
    this.renderable = true;
  }

  evaluate($event)
  {
    this.choosedAnswers[$event[0]] = $event[1];
    this.choosedAnswers.length >= this.quiz.num ? this.canEvaluate = true : this.canEvaluate = false;
  }
  grade(choosedAnswers: boolean[]) {
    let myGrade = 0;
    choosedAnswers.forEach(element => {
      element ? myGrade++ : myGrade;
    });

    this.finallGrade = myGrade;
  }

  onFinish()
  {
    this.grade(this.choosedAnswers);
    this.result = true;
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from './../../services/quiz.service';

@Component({
  selector: 'app-pracice',
  templateUrl: './pracice.component.html',
  styleUrls: ['./pracice.component.css']
})
export class PraciceComponent implements OnInit {

  // properties
  quiz: any = null;


  // end properties

  constructor(private route:ActivatedRoute, private router:Router, private quizService: QuizService) { }

  ngOnInit() {


    //get id from uri

    this.route.paramMap.subscribe(params => {
      // guard
      if (params.params.id) {
        this.quizService.getQuiz(params.params.id).subscribe(
          (data) => {
            console.log(data);
            if (!data.published) this.router.navigate(['404']);
            this.quiz = data;


          } 
        );
     
      }
      else {
        
      }


    });
  }

}

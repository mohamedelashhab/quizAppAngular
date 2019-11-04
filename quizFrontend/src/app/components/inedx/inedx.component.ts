import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from './../../services/user-auth.service';
import { QuizService } from './../../services/quiz.service';


@Component({
  selector: 'app-inedx',
  templateUrl: './inedx.component.html',
  styleUrls: ['./inedx.component.css']
})
export class InedxComponent implements OnInit , AfterViewInit {
  

  quizId: number = null;
  renderable: boolean = false;
  constructor(private route: ActivatedRoute, private userAuth: UserAuthService, private quizService: QuizService, private router: Router) { }

  ngOnInit() {

    //get id from uri

    this.route.paramMap.subscribe(params => {
      // guard
      if(params.params.id){
        this.quizService.getQuiz(params.params.id).subscribe(
          (data) => {
            //check if can update quiz
            if (!data || data.teacher_id != this.userAuth.id()) {
              this.renderable = false;
              this.router.navigate(['404']);
            };
            this.renderable = true;
          },
          (error) => {
            this.renderable = false;
            this.router.navigate(['404']);
          }
        );
        this.quizId = params.params.id;
      }
      else{
        this.renderable = true;
      }
     

    });
  }

  ngAfterViewInit(): void {
  }

  

}

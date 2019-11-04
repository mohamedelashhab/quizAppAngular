import { Component, OnInit } from '@angular/core';
import { QuizService } from './../../services/quiz.service';
import { Router } from '@angular/router';
import { UserAuthService } from './../../services/user-auth.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {


  //not published quizzes
  quizzes: any;

  constructor(private quizService: QuizService,
     private router: Router,
     private userAuth: UserAuthService) { }

  ngOnInit() {

    //get not published quizzes
    this.quizService.getAllQuizzes().subscribe(
      (data) => { console.log(data); this.quizzes = data ;}
    );


  }


  //edit to publish quiz
  edit(quiz)
  {

    //guard
    if (!quiz || this.userAuth.id() != quiz.teacher_id) { 
      this.router.navigate(['**']);
    }
    else{
      //navigate to quiz component
      if(this.checkRole()){
        this.checkPublish(quiz);
      }else{
        this.startQuiz(quiz.id);
      }
    }


  }
  startQuiz(id: any) {
    this.router.navigate([`/quizzes/${id}/practice`]);
  }
  checkPublish(quiz: any) {
    if(!quiz.published)
    {
      this.router.navigate([`/quizzes/${quiz.id}/edit`]);
    }
  }

  checkRole(){
    if(this.userAuth.role() == 1){
      return true;
    }else{
      return false;
    }
  }

}

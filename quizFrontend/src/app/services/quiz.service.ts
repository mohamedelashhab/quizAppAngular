import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  baseUrl = 'http://localhost:8000/api';

  headers = new HttpHeaders().set('Authorization', `bearer ${localStorage.getItem('token')}`);

  constructor(private http: HttpClient, private userAuth: UserAuthService) {
 }

  createQuiz(data)
  {
    return this.http.post(`${this.baseUrl}/${this.userAuth.id()}/quiz/create`, data, {headers: this.headers});
  }

  createQuestation(data: any, quizId: number)
  {
    return this.http.post(`${this.baseUrl}/questations/${quizId}/create`, data, { headers: this.headers });
  }

  createAnswers(data: any, questationId: number)
  {
    return this.http.post(`${this.baseUrl}/answers/${questationId}/create`, data, { headers: this.headers });
  }

  getQuiz(quizId: number){
    return this.http.get(`${this.baseUrl}/quiz/${quizId}/show`, { headers: this.headers });
  }
  editQuiz(data: any, quizId)
  {
    return this.http.put(`${this.baseUrl}/quiz/${quizId}/edit`,data, { headers: this.headers });
  }
  publishQuiz(data: any, quizId)
  {
    return this.http.put(`${this.baseUrl}/quiz/${quizId}/publish`,data, { headers: this.headers });
  }
  editQuestation(data: any, questationId)
  {
    return this.http.put(`${this.baseUrl}/questations/${questationId}/edit`,data, { headers: this.headers });
  }
  editAnswer(data: any, answerId)
  {
    return this.http.put(`${this.baseUrl}/answers/${answerId}/edit`,data, { headers: this.headers });
  }

  getQuizzes(published:boolean = false)
  {
    return this.http.get(`${this.baseUrl}/quizzes/list?published=${published}`, { headers: this.headers });
  }
  getAllQuizzes()
  {
    return this.http.get(`${this.baseUrl}/quizzes/list`, { headers: this.headers });
  }
  

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  user: any = {
    id: '',
    name: '',
    role_id: ''
  };

  constructor(){
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  id()
  {
    if(this.user != null)
    {
      return this.user.id;
    }  
    
  }

  role()
  {
    if (this.user != null) {
      return this.user.role_id;
    }  
  }

  setUser(user){
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

  removeUser()
  {
    this.user = null;
    localStorage.removeItem('user');
  }
}

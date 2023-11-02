import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserLoginReq } from '../models/user-login-req';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private host = environment.baseUrl;
  constructor(private httpCl: HttpClient) {}
  logout(): Observable<any> {
    return this.httpCl.post(this.host + '/admin/logout', {
      observe: 'response',
    });
  }

  signIn(userLogin: UserLoginReq): Observable<any> {
    console.log("kk",userLogin)
    return this.httpCl.post(this.host + '/admin/login', userLogin);
  }
  signUp(userSignup: User): Observable<any> {
    return this.httpCl.post(`${this.host}/admin/register`, userSignup, {
      responseType: 'text',
    });
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  SERVER_URI = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  buildHeaders(): HttpHeaders {

    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': ''
    };

    if (localStorage.getItem('token')) {

      headersConfig['Authorization'] = `bearer ${localStorage.getItem('token')}`;
    }
    return new HttpHeaders(headersConfig);
  }

  loginUser(user: User) {
    return this.http.post<string>(this.SERVER_URI + "/login", user)
                .subscribe((res: any) => {
                  localStorage.setItem("token", res.jwtToken)
                  localStorage.setItem("resMessage", res.message);
              })
  }

  saveUser(user: User) {
    return this.http.post<string>(this.SERVER_URI + "/signup", user);
  }

  userProfile() {
    return this.http.get(this.SERVER_URI + "/profile", { headers: this.buildHeaders() })
  }

  // logoutUser(){
  //   localStorage.removeItem('token');
  // }
}

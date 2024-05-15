import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable , of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginStatus: boolean = false;
  private userProfileSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private loggedInUserProfile: Observable<any> = this.userProfileSubject.asObservable();
  constructor(private http : HttpClient) { }
  register = (user: any): Observable<any> => {
    console.log(user);
    return this.http.post(`http://localhost:2000/register`, user);
  };

  login = (user: any): Observable<any> => {
  
    console.log("User Data" + user);
    //this.loggedInUserProfile = user;
    this.loginStatus = true;
    return this.http.post(`http://localhost:2000/login`, user);
    
  };

  updateProfile = (user: any): Observable<any> => {
    console.log(user);
    return this.http.put(`http://localhost:2000/update`, user);
  };
  getProfile = (): Observable<any> => {
    console.log("get Profile", this.loggedInUserProfile);
    return of(this.loggedInUserProfile);
  };

  setProfile = (user: any): void => {
    console.log("set profile" +user);
    this.userProfileSubject.next(user);
    console.log("userProfileSubject value", this.userProfileSubject.value);
    this.loggedInUserProfile = this.userProfileSubject.value
  }
  getLoginStatus(){
    console.log(this.loginStatus);
    return this.loginStatus;
  }
  logout = () => {
    console.log(this.loggedInUserProfile);
    this.userProfileSubject.next(null);
    console.log(this.loggedInUserProfile);
    this.loginStatus = false;
  };
}

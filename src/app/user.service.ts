import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public token:any;

  constructor(private _http:HttpClient) { }

  registerUser(user:any){
    return this._http.post<{message:string,user:any}>(environment.baseUrlUser+'/register',user);
  }

  loginUser(loginInfo:any){
    return this._http.post<{message:string,user:any,token:string}>(environment.baseUrlUser+'/login',loginInfo);
  }

  isLoggedIn(){
    this.token=localStorage.getItem('token');
    if(this.token==null)
    {
      return false;
    }
    else{
      return this.token;
    }
  }
}

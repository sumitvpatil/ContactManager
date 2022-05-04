import { Component, OnInit } from '@angular/core';
import { LogModel } from '../log-model';
import { NavHomeService } from '../nav-home.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { LogHomeService } from '../log-home.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user=new LogModel('','');
  public isError:boolean=true;
  public isSuccess:boolean=true;
  public message:string="";
  constructor(public nh:NavHomeService,private _userService:UserService,private router:Router,private lh:LogHomeService) { }

  ngOnInit(): void {
    this.nh.isHome=true;
    this.nh.isAbout=false;
    this.nh.isRegister=false;
  }

  onLogin(){
    if(this.user.email=="" && this.user.password==""){
      this.message="Enter Username/Password";
      this.isError=false;
      this.isSuccess=true;
    }
    else{
      this._userService.loginUser(this.user).subscribe(response=>{
        console.log(response);
        this.message=response.message;
        this.isError=true;
        this.isSuccess=false;
        localStorage.setItem('token',response.token);
        localStorage.setItem('userId',response.user.id);
        localStorage.setItem('userName',response.user.name);
        this.router.navigate(['/contactlist']);
        this.lh.showlog=false;
      },err=>{
        this.message=err.error.message;
        this.isError=false;
        this.isSuccess=true;
      })
    }
  }
}

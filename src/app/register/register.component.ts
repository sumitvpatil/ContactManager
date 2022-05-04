import { Component, OnInit } from '@angular/core';
import { NavHomeService } from '../nav-home.service';
import { RegModel } from '../reg-model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user =new RegModel('','','');
  public iserror:boolean=true;
  public message:string="";
  public isSuccess:boolean=true;
  public confpass:string="";
  public isLogin:boolean=true;
  constructor(public nh:NavHomeService,private _userService:UserService) { }

  ngOnInit(): void {
    this.nh.isRegister=true;
    this.nh.isHome=false;
    this.nh.isAbout=false;
  }
  onSubmit(){
    this._userService.registerUser(this.user).subscribe(response=>{
      this.isLogin=false;
      this.message=response.message+". Login to get started!!";
      this.isSuccess=false;
      this.iserror=true;
    },err=>{
      this.message=err.error.message;
      this.isSuccess=true;
      this.iserror=false;
    });
  }
}

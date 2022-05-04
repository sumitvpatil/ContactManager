import { Component, OnInit } from '@angular/core';
import { NavHomeService } from '../nav-home.service';
import { Router } from '@angular/router';
import { LogHomeService } from '../log-home.service';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.css']
})
export class NavbarHomeComponent implements OnInit {
  public isShow=true;
  public uname:any;
  constructor(public nh:NavHomeService,private _router:Router,private lh:LogHomeService) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')!=undefined){
      this.isShow=false;
      this.uname=localStorage.getItem('userName');
    }
    else{
      this.isShow=true;
    }
  }

  onHomeClick(){
    if(this.nh.isHome!=true){
      this.nh.isHome=true;
      this.nh.isAbout=false;
      this.nh.isRegister=false;
    }
  }

  onRegisterClick(){
    if(this.nh.isRegister!=true){
      this.nh.isRegister=true;
      this.nh.isAbout=false;
      this.nh.isHome=false;
    }
  }

  onAboutClick(){
    if(this.nh.isAbout!=true){
      this.nh.isAbout=true;
      this.nh.isHome=false;
      this.nh.isRegister=false;
    }
  }
  onLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    this.ngOnInit();
    this._router.navigate([""]);
    this.lh.showlog=true;
  }
  onList(){
    this._router.navigate(['contactlist'])
  }
}


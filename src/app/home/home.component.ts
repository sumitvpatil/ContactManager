import { Component, OnInit } from '@angular/core';
import { LogHomeService } from '../log-home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public message!:string;

  constructor(public lh:LogHomeService) { }

  ngOnInit(): void {
    this.message="Hello "+localStorage.getItem('userName');
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavHomeService {
  public isHome:boolean=true;
  public isRegister:boolean=false;
  public isAbout:boolean=false;
  constructor() { }
}

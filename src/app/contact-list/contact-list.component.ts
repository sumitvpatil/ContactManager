import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  public contactList:any[]=[];
  constructor(private _cs:ContactService) { }

  ngOnInit(): void {
    this._cs.listContacts().subscribe(response=>{
      console.log(response.contactList);
      this.contactList=response.contactList;
      console.log(this.contactList);
    },err=>{
      console.log(err);
    })
  }

}

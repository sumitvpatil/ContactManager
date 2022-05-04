import { Component, OnInit } from '@angular/core';
import { ContactModel } from '../contact-model';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css']
})
export class ContactAddComponent implements OnInit {
  public userId:any;
  public isError:boolean=true;
  public isSuccess:boolean=true;
  public message:string="";
  public contact=new ContactModel('','','','','');

  constructor(public _cs:ContactService,private router:Router) { }

  ngOnInit(): void {
    this.userId=localStorage.getItem('userId');
    this.contact.userId=this.userId;
  }
  onSubmit(){
    this._cs.addContact(this.contact).subscribe(response=>{
      this.message=response.message;
      this.isSuccess=false;
      this.isError=true;
      this.router.navigate(['/contactlist'])
    },err=>{
      this.message=err.error.message;
      this.isSuccess=true;
      this.isError=false;
    });
  }

}

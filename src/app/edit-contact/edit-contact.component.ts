import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ContactModel } from '../contact-model';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  public contactID!:string;
  public contact=new ContactModel('','','','','');
  public message!:string;
  public isError:boolean=true;
  public isSuccess:boolean=true;
  constructor(private _cs:ContactService,private _acroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this._acroute.params.subscribe(params=>{
      this.contactID=params.id;
    });
    this._cs.getContactbyID(this.contactID).subscribe(response=>{
      console.log(response)
      this.contactID=response.contact._id;
      this.contact.contactName=response.contact.contactName;
      this.contact.contactEmail=response.contact.contactEmail;
      this.contact.contactPhone=response.contact.contactPhone;
      this.contact.contactType=response.contact.contactType;
      this.contact.userId=response.contact.userId;
    },err=>{
      console.log(err);
    })
  }

  onSubmit(){
    this._cs.updateContact(this.contactID,this.contact).subscribe(response=>{
      this.message=response.message;
      this.isSuccess=false;
      this.isError=true;
      this.router.navigate(['/contactlist']);
    },err=>{
      this.message=err.error.message;
      this.isSuccess=true;
      this.isError=false;
    });
  }
}

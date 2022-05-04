import { Component, OnInit,Input } from '@angular/core';
import { ContactService } from '../contact.service';
import { ContactModel } from '../contact-model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public visible:boolean=false;
  @Input() public contact:any;
  constructor(private _cs:ContactService,private _acroute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  onClick(){
    this.visible=!this.visible;
  }
  onDelete(){
    this._cs.deleteContact(this.contact._id).subscribe(resposnse=>{
      console.log(resposnse);
    })
  }

}

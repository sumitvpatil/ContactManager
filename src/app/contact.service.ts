import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public token!:any;
  constructor(private _http:HttpClient) { }

  listContacts(){
    this.token=localStorage.getItem('token');
    return this._http.get<{message:string,contactList:any}>(environment.baseUrlContact+"/"+localStorage.getItem('userId'),{
      headers:new HttpHeaders().set('x-user-token',this.token)
    });
  }

  getContactbyID(id:string){
    this.token=localStorage.getItem('token');
    return this._http.get<{message:string,contact:any}>(`${environment.baseUrlContact}/getbyid/`+id,{
      headers:new HttpHeaders().set('x-user-token',this.token)
    });
  }

  updateContact(id:string,contact:any){
    this.token=localStorage.getItem('token');
    return this._http.put<{message:string}>(`${environment.baseUrlContact}/update/${id}`,contact,{
      headers:new HttpHeaders().set('x-user-token',this.token)
    });
  }

  deleteContact(id:string){
    this.token=localStorage.getItem('token');
    console.log(this.token);
    return this._http.delete<{message:string}>(`${environment.baseUrlContact}/delete/${id}`,{
      headers:new HttpHeaders().set('x-user-token',this.token)
    });
  }

  addContact(contact:any){
    this.token=localStorage.getItem('token');
    return this._http.post<{message:string}>(`${environment.baseUrlContact}/createContact`,contact,{
      headers:new HttpHeaders().set('x-user-token',this.token)
    });
  }
}


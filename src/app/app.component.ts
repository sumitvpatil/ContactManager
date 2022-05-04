import { Component } from '@angular/core';
import { UserService } from './user.service';
import { RegModel } from './reg-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public user=new RegModel('','','');
  title = 'contact-manager';
}

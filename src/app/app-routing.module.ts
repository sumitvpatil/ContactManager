import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { AuthGuardService } from './auth-guard.service';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"about",component:AboutComponent},
  {path:"contactlist",component:ContactListComponent,canActivate:[AuthGuardService]},
  {path:"contactlist/edit/:id",component:EditContactComponent,canActivate:[AuthGuardService]},
  {path:"contactlist/add",component:ContactAddComponent,canActivate:[AuthGuardService]},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeInfoComponent } from './home-info/home-info.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ListComponent } from './list/list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeInfoComponent,
    LoginComponent,
    AboutComponent,
    NavbarHomeComponent,
    RegisterComponent,
    ContactListComponent,
    ListComponent,
    EditContactComponent,
    ContactAddComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

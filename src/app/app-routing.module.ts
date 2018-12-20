import { UserFormDetailsComponent } from './user-form-details/user-form-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormLoginComponent } from './user-form-login/user-form-login.component';
import { HomeComponent } from './home/home.component';
import { UserFormRegisterComponent } from './user-form-register/user-form-register.component';
import { AboutComponent } from './about/about.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'details', component: UserFormDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login' , component: UserFormLoginComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'register', component: UserFormRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

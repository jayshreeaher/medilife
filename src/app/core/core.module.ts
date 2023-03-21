import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './components/headers/headers.component';
import { FootersComponent } from './components/footers/footers.component';
import { PageNotFountComponent } from './components/page-not-fount/page-not-fount.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeadersComponent,
    FootersComponent,
    PageNotFountComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    HeadersComponent,
    FootersComponent,
    // SigninComponent,
    // SignupComponent
  ]
})
export class CoreModule { }

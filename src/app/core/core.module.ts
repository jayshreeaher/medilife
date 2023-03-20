import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './components/headers/headers.component';
import { FootersComponent } from './components/footers/footers.component';
import { PageNotFountComponent } from './components/page-not-fount/page-not-fount.component';



@NgModule({
  declarations: [
    HeadersComponent,
    FootersComponent,
    PageNotFountComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeadersComponent,
    FootersComponent
  ]
})
export class CoreModule { }

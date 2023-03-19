import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MedicineHomeComponent } from './components/medicine-home/medicine-home.component';
import { PageNotFountComponent } from './core/components/page-not-fount/page-not-fount.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"medicine-home",component:MedicineHomeComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"**",component:PageNotFountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

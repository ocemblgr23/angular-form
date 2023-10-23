import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashComponent } from './user-dash/user-dash.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:"",redirectTo:"userdas",pathMatch:"full"},
  {path:"userdas",component:UserDashComponent},
  {path:"about",component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

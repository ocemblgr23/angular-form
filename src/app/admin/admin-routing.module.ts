import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:"",redirectTo:"dash",pathMatch:"full"},
  {path:"dash",component:AdminDashComponent},
  {path:"about",component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

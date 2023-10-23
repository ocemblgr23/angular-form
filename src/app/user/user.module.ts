import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDashComponent } from './user-dash/user-dash.component';
import { AboutComponent } from './about/about.component';
import { PrimeModule } from '../prime/prime.module';


@NgModule({
  declarations: [
    UserDashComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    PrimeModule,
  ]
})
export class UserModule { }

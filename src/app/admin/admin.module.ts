import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AboutComponent } from './about/about.component';
import { PrimeModule } from '../prime/prime.module';


@NgModule({
  declarations: [
    AdminDashComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimeModule
  ]
})
export class AdminModule { }

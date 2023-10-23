import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    ButtonModule,
    MenubarModule
  ],
})
export class PrimeModule {}

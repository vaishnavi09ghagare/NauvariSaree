import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutushomeComponent } from './aboutushome/aboutushome.component';


@NgModule({
  declarations: [
    AboutushomeComponent
  ],
  imports: [
    CommonModule,
    AboutusRoutingModule
  ]
})
export class AboutusModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SareesRoutingModule } from './sarees-routing.module';
import { SareeshomeComponent } from './sareeshome/sareeshome.component';
import { BramhanisadiComponent } from './bramhanisadi/bramhanisadi.component';
import { RajlaxmisadiComponent } from './rajlaxmisadi/rajlaxmisadi.component';
import { LavanisadiComponent } from './lavanisadi/lavanisadi.component';
import { MastanisadiComponent } from './mastanisadi/mastanisadi.component';
import { PeshwaisadiComponent } from './peshwaisadi/peshwaisadi.component';
import { ShahimastanisadiComponent } from './shahimastanisadi/shahimastanisadi.component';
import { MahalakshmisadiComponent } from './mahalakshmisadi/mahalakshmisadi.component';


@NgModule({
  declarations: [
    SareeshomeComponent,
    BramhanisadiComponent,
    RajlaxmisadiComponent,
    LavanisadiComponent,
    MastanisadiComponent,
    PeshwaisadiComponent,
    ShahimastanisadiComponent,
    MahalakshmisadiComponent
  ],
  imports: [
    CommonModule,
    SareesRoutingModule
  ]
})
export class SareesModule { }

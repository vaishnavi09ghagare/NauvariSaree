import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SareeshomeComponent } from './sareeshome/sareeshome.component';
import { BramhanisadiComponent } from './bramhanisadi/bramhanisadi.component';
import { LavanisadiComponent } from './lavanisadi/lavanisadi.component';
import { RajlaxmisadiComponent } from './rajlaxmisadi/rajlaxmisadi.component';
import { MastanisadiComponent } from './mastanisadi/mastanisadi.component';
import { PeshwaisadiComponent } from './peshwaisadi/peshwaisadi.component';
import { ShahimastanisadiComponent } from './shahimastanisadi/shahimastanisadi.component';
import { MahalakshmisadiComponent } from './mahalakshmisadi/mahalakshmisadi.component';

const routes: Routes = [
  {path:'',component:SareeshomeComponent,
  children:[
    {path:'',component:BramhanisadiComponent},
    {path:'rajlaxmisaree',component:RajlaxmisadiComponent},
    {path:'lavanisaree',component:LavanisadiComponent},
    {path:'mastanisaree',component:MastanisadiComponent},
    {path:'peshwaisaree',component:PeshwaisadiComponent},
    {path:'shahimastanisaree',component:ShahimastanisadiComponent},
    {path:'mahalaxmisaree',component:MahalakshmisadiComponent},
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SareesRoutingModule { }

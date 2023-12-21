import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusModule } from './aboutus/aboutus.module';
import { HomeComponent } from './home/home.component';
import { SareesModule } from './sarees/sarees.module';

const routes: Routes = [ 
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'aboutus',
    loadChildren:()=> import('./aboutus/aboutus.module').then(a => a.AboutusModule)
  },
  {path:'sarees',
  loadChildren:()=> import('./sarees/sarees.module').then(s => s.SareesModule)
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

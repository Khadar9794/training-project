import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCenterComponent } from './add-center/add-center.component';
import { HomeComponent } from './home/home.component';
import { CenterDetailsComponent } from './center-details/center-details.component';
import { CenterListComponent } from './center-list/center-list.component';

const routes: Routes = [
  {
    path:"app-home",
    component:HomeComponent
  },
  {
    path:'',
    redirectTo :'app-home',
    pathMatch:'full'
  },
  {
    path:'center-details',
    component:CenterDetailsComponent
  },
  {
    path:'add-center',
    component:AddCenterComponent
  },
  {
    path:'center-list',
    component:CenterListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
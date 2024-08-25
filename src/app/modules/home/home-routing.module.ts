import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewHomeComponent } from './new-home/new-home.component';
import path from 'path';

const routes: Routes = [
  {
  path:"home",
  component: NewHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

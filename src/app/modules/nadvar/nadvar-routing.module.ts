import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LNadvarComponent } from './l-nadvar/l-nadvar.component';
import { UNadvarComponent } from './u-nadvar/u-nadvar.component';

const routes: Routes = [
  {
    path:"lNadvar",
    component:LNadvarComponent
  },
  {
    path:"uNadvar",
    component:UNadvarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NadvarRoutingModule { }

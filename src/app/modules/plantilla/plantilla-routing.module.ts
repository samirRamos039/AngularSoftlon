import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormuPlantillaComponent } from './formu-plantilla/formu-plantilla.component';

const routes: Routes = [
  {
    path:"plantilla",
    component:FormuPlantillaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlantillaRoutingModule { }

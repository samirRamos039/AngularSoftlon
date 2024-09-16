import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/login/login.component';

import { LNadvarComponent } from './modules/nadvar/l-nadvar/l-nadvar.component';
import { UNadvarComponent } from './modules/nadvar/u-nadvar/u-nadvar.component';
import { HomeModule } from './modules/home/home.module';
import { FormComponent } from './modules/auth/form/form.component';

export const routes: Routes = [
    {
       path:"home", 
       component:HomeModule
    },
    {
        path:"auth/login", 
        component:LoginComponent
     },
     {
      path:"auth/form",
      component:FormComponent
     },
     {
      path:"lnadvar", 
      component:LNadvarComponent
     },
     {
      path:"unadvar",
      component:UNadvarComponent
     },
     {
      path:"homeModuls", 
      loadChildren: ()=> import ("./modules/plantilla/formu-plantilla/formu-plantilla.component").then(m => m.FormuPlantillaComponent)
     }
];

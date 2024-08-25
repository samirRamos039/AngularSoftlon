import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { NewHomeComponent } from './modules/home/new-home/new-home.component';
import { LNadvarComponent } from './modules/nadvar/l-nadvar/l-nadvar.component';
import { UNadvarComponent } from './modules/nadvar/u-nadvar/u-nadvar.component';

export const routes: Routes = [
    {
       path:"homeModuls", 
       component:NewHomeComponent
    },
    {
        path:"homeModuls", 
        component:LoginComponent
     },
     {
      path:"homeModuls", 
      component:LNadvarComponent
     },
     {
      path:"homeModuls",
      component:UNadvarComponent
     },
     {
      path:"homeModuls", 
      loadChildren: ()=> import ("./modules/plantilla/plantilla.module").then(m => m.PlantillaModule)
     }
];

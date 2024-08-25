import { Routes } from '@angular/router';
import { AppComponent } from './app.component';


export const routes: Routes = [
    {
       path:"homeModuls", 
       loadChildren: ()=> import ("./modules/home/home.module").then(m => m.HomeModule)
    },
    {
        path:"homeModuls", 
        loadChildren: ()=> import ("./modules/auth/auth.module").then(m => m.AuthModule)
     },
     {
      path:"homeModuls", 
      loadChildren: ()=> import ("./modules/nadvar/nadvar.module").then(m => m.NadvarModule)
     },
     {
      path:"homeModuls", 
      loadChildren: ()=> import ("./modules/plantilla/plantilla.module").then(m => m.PlantillaModule)
     }
];

import { Routes } from '@angular/router';
import { AppComponent } from './app.component';


export const routes: Routes = [
    {
       path:"homeModuls", 
       loadChildren: ()=> import ("./modules/home/home.module").then(m => m.HomeModule)
    },
    {
        path:"authModuls", 
        loadChildren: ()=> import ("./modules/auth/auth.module").then(m => m.AuthModule)
     }
];

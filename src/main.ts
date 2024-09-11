import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { NewHomeComponent } from './app/modules/home/new-home/new-home.component';

bootstrapApplication(NewHomeComponent, appConfig)
  .catch((err) => console.error(err));

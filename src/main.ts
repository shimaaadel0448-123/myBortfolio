import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { App } from './app/app';

const configWithHttp = {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient()            
  ]
};

bootstrapApplication(App, configWithHttp)
  .catch((err) => console.error(err));

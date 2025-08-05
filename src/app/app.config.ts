import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// added
import {
  HOT_GLOBAL_CONFIG,
  HotGlobalConfig,
  NON_COMMERCIAL_LICENSE,
} from "@handsontable/angular-wrapper";

const globalHotConfig: HotGlobalConfig = {
  license: NON_COMMERCIAL_LICENSE,
  layoutDirection: "ltr",
  language: "en",
  themeName: "ht-theme-main",
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: HOT_GLOBAL_CONFIG, useValue: globalHotConfig }
  ]
};

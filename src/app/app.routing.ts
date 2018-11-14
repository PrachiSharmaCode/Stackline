import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {SalesPageComponent} from './components/sales-page/sales-page.component';

const appRoutes: Routes = [
  {path: '', component: SalesPageComponent},

];

export const routing = RouterModule.forRoot(appRoutes);
export const routingComponents = [SalesPageComponent];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

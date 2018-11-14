import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {ChartsModule} from 'ng2-charts';


import { AppComponent } from './app.component';
import { SalesPageComponent } from './components/sales-page/sales-page.component';
import { ItemDetailsService} from './services/itemDetail/item-details.service';


@NgModule({
  declarations: [
    AppComponent,
    SalesPageComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    ItemDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

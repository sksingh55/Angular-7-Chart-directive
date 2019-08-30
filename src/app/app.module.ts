import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import {ChartModule} from "angular-highcharts";
import {Chartconstant} from "./chartconstant";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [
    Chartconstant
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterContentComponent } from './event/components/footer-content/footer-content.component';
import { NavComponent } from './event/components/nav/nav.component';
import { MainContentComponent } from './event/components/main-content/main-content.component';
import {HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "@angular/cdk/layout";

@NgModule({
  declarations: [
    AppComponent,
    FooterContentComponent,
    NavComponent,
    MainContentComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

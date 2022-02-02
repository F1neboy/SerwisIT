import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NaprawaComponent } from './naprawa/naprawa.component';
import { StatusComponent } from './status/status.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { StatusdescriptionComponent } from './statusdescription/statusdescription.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NaprawaComponent,
    StatusComponent,
    StatusdescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

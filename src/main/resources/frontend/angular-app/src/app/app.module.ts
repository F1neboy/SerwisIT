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
import { PotwierdzenieComponent } from './potwierdzenie/potwierdzenie.component';
import { LoginComponent } from './login/login.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import {CommonModule} from "@angular/common";
import { ClientpanelComponent } from './clientpanel/clientpanel.component';
import { CennikComponent } from './cennik/cennik.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NaprawaComponent,
    StatusComponent,
    StatusdescriptionComponent,
    PotwierdzenieComponent,
    LoginComponent,
    AdminpanelComponent,
    ClientpanelComponent,
    CennikComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

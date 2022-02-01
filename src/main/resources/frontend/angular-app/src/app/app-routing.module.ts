import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NaprawaComponent} from "./naprawa/naprawa.component";
import {StatusComponent} from "./status/status.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'naprawa', component: NaprawaComponent},
  {path: 'status', component: StatusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

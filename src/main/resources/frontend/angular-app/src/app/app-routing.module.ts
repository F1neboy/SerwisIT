import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NaprawaComponent} from "./naprawa/naprawa.component";
import {StatusComponent} from "./status/status.component";
import {StatusdescriptionComponent} from "./statusdescription/statusdescription.component";
import {PotwierdzenieComponent} from "./potwierdzenie/potwierdzenie.component";
import {LoginComponent} from "./login/login.component";
import {AdminpanelComponent} from "./adminpanel/adminpanel.component";
import {ClientpanelComponent} from "./clientpanel/clientpanel.component";
import {CennikComponent} from "./cennik/cennik.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'naprawa', component: NaprawaComponent},
  {path: 'status', component: StatusComponent},
  {path: 'statusdesc', component: StatusdescriptionComponent},
  {path: 'potwierdzenie', component: PotwierdzenieComponent},
  {path: 'login', component: LoginComponent},
  {path: 'adminpanel', component: AdminpanelComponent},
  {path: 'clientpanel', component: ClientpanelComponent},
  {path: 'cennik', component: CennikComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

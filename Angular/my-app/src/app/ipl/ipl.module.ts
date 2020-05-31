import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IplRoutingModule } from './ipl-routing.module';
import { IplComponent } from './ipl.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
;
import { TeamComponent } from './team/team.component';
import { PlayersComponent } from './players/players.component';
import { IplhomeComponent } from './iplhome/iplhome.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { IplheadComponent } from './iplhead/iplhead.component';
import { Ng2GoogleChartsModule, GoogleChartsSettings,ChartSelectEvent } from 'ng2-google-charts';
import { BiddingstatsComponent } from './biddingstats/biddingstats.component';

@NgModule({
  declarations: [IplComponent,  TeamComponent, PlayersComponent, IplhomeComponent, LoginComponent, IplheadComponent, BiddingstatsComponent,],
  imports: [
    CommonModule,
    IplRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2GoogleChartsModule,
  ]
})
export class IplModule { }

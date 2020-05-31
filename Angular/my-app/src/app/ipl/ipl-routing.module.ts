import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IplComponent } from './ipl.component';
import { PlayersComponent } from './players/players.component';
import { TeamComponent } from './team/team.component';
import { IplhomeComponent } from './iplhome/iplhome.component';
import { LoginComponent } from './login/login.component';
import { BiddingstatsComponent } from './biddingstats/biddingstats.component';


const routes: Routes = [
{
  path:'',
  component:IplComponent,

  children:[
    {
      path:'',
      component:LoginComponent
    },

    {
      path:'iplhome',  
      component:IplhomeComponent,
    },
    {
      path:'players',
      component:PlayersComponent,
    },
    {
      path:'team',
      component:TeamComponent
    },
    {
      path:'bidding',
      component:BiddingstatsComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IplRoutingModule { }

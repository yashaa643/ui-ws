import { Component, OnInit } from '@angular/core';
import { IplService } from '../ipl.service';
import { Team } from 'src/app/shared/team.model';
import { Player } from 'src/app/shared/player.model';
import { GoogleChartInterface } from 'ng2-google-charts';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  label: string;
  coach: string;
  home: string;
  logoURL: string;
  coachURL: string;
  homeURL: string;
  teams: Team[] = [];
  config: any;
  playersnum: number = 0;
  all: number = 0;
  bat: number = 0;
  bowl: number = 0;
  wk: number = 0;

  constructor(private iplService: IplService) {
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.teamDetail.length
    };
  }

  players: Player[] = [];
  teamDetail: Player[] = [];

  isClicked: boolean = false;

  public pieChart: GoogleChartInterface = {
    chartType: 'PieChart',
    dataTable: [['Role', 'PLayers']],
    //firstRowIsData: true,
    options: { 'title': 'Roles' },
  };


  myfunction() {
    let ccComponent = this.pieChart.component;
    let ccWrapper = ccComponent.wrapper;
    ccWrapper.setDataTable();

    console.log(this.pieChart.dataTable)
    //force a redraw
    ccComponent.draw();
  }



  displayTeam(event) {

    this.teamDetail = [];
    this.logoURL = "../../../assets/images/logos/" + this.label + ".png";
    this.coachURL = "../../../assets/images/coach/" + this.label + ".jpg";
    this.homeURL = "../../../assets/images/home/" + this.label + ".jpg"
    this.isClicked = true;
    this.label = event.target.parentElement.children[2].innerHTML;
    this.coach = event.target.parentElement.children[3].innerHTML;
    this.home = event.target.parentElement.children[5].innerHTML;

    this.players.forEach(e => {
      if (e.label === this.label) {
        this.teamDetail.push(e);
      }
    })

    for (let i = 0; i < this.teamDetail.length; i++) {
      switch (this.teamDetail[i].role) {
        case "Wicket Keeper": this.wk++;
          break;
        case "Batsman": this.bat++;
          break;
        case "Bowler": this.bowl++;
          break;
        case "All-Rounder": this.all++;
          break;

        default: break;
      }
    }
    this.pieChart.dataTable = [
      ['Role', 'PLayers'],
      ['Wicket Keeper', this.wk],
      ['Batsman', this.bat],
      ['Bowler', this.bowl],
      ['All-Rounder', this.all],]

    this.myfunction();

  }


  

  pageChanged(event) {
    this.config.currentPage = event;
  }


  ngOnInit(): void {


    this.iplService.teamDetails().subscribe(res => {
      this.teams = res;
      console.log(this.teams)
    });

    this.iplService.playerDetails().subscribe(res => {
      this.players = res;

    })

    

}

 


}
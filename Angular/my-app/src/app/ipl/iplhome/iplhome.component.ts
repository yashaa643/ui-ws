import { Component, OnInit } from '@angular/core';
import { IplService } from '../ipl.service';
import { Player } from 'src/app/shared/player.model';
import { GoogleChartInterface,ChartSelectEvent } from 'ng2-google-charts';




@Component({
  selector: 'app-iplhome',
  templateUrl: './iplhome.component.html',
  styleUrls: ['./iplhome.component.css']
})
export class IplhomeComponent implements OnInit {


  players: number = 0;
  all: number = 0;
  bat: number = 0;
  bowl: number = 0;
  wk: number = 0;

  playersarr: Player[] = [];

  drilldownarr: Player[] = [];
  isClicked: Boolean = false;


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

    //force a redraw
    ccComponent.draw();
  }

  public select(event: ChartSelectEvent) {

      this.drilldownarr=[];

      this.isClicked = true;

      this.playersarr.forEach(e=>{
        if(e.role==event.selectedRowValues[0]){
          this.drilldownarr.push(e);
        }
      })
      
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }


  config:any;

  constructor(private iplService: IplService) {

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.drilldownarr.length
    };

  }

  ngOnInit(): void {

    this.iplService.playerDetails().subscribe(res => {
      this.playersarr = res;
      this.players = this.playersarr.length;

      this.all = 0;
      this.bat = 0;
      this.bowl = 0;
      this.wk = 0;

      


      for (let i = 0; i < this.players; i++){
        switch (this.playersarr[i].role) {
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

    
);

  }

  
}




import { Component, OnInit } from '@angular/core';
import { IplService } from '../ipl.service';
import { Player } from 'src/app/shared/player.model';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: Player[] = [];

  searchText:string;
  
  config: any;
  constructor(private iplservice: IplService,
  ) {

    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: 188
    };
  }

  ngOnInit(): void {

    this.iplservice.playerDetails().subscribe(res => {
      this.players = res;
      
      })


  }

  pageChanged(event) {
    this.config.currentPage = event;
  }

}

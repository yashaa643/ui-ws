import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/player.model';
import { IplService } from '../ipl.service';

@Component({
  selector: 'app-biddingstats',
  templateUrl: './biddingstats.component.html',
  styleUrls: ['./biddingstats.component.css']
})
export class BiddingstatsComponent implements OnInit {

  players: Player[] = [];

  batsman: Player = {

    "label": "string",
    "name": "string",
    "price": 0,
    "role": "string"

  }
  all: Player = {

    "label": "string",
    "name": "string",
    "price": 0,
    "role": "string"

  }
  bowler: Player = {

    "label": "string",
    "name": "string",
    "price": 0,
    "role": "string"

  }
  wk: Player = {

    "label": "string",
    "name": "string",
    "price": 0,
    "role": "string"

  }




  constructor(private iplService: IplService) { }

  ngOnInit(): void {

    this.iplService.playerDetails().subscribe(res => {
      this.players = res;

      this.players.forEach(element => {

        switch (element['role']) {
          case 'Wicket Keeper':
            if (element['price'] > this.wk['price'])
              this.wk = element;
            break;
          case 'Batsman':
            if (element['price'] > this.batsman['price'])
              this.batsman = element;
            break;
          case 'Bowler':
            if (element['price'] > this.bowler['price'])
              this.bowler = element;
            break;
          case 'All-Rounder':
            if (element['price'] > this.all['price'])
              this.all = element;
            break;
          default:
            break;

        }
      });

    })

  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iplhead',
  templateUrl: './iplhead.component.html',
  styleUrls: ['./iplhead.component.css']
})
export class IplheadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clear(){
    localStorage.clear();
  }

}

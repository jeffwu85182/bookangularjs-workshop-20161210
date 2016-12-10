import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  mockData = [{
    orderTime: '12:00',
    person: 2,
    orderPrice: 300,
  },
  {
    orderTime: '12:00',
    person: 4,
    orderPrice: 320,
  },
  {
    orderTime: '12:00',
    person: 6,
    orderPrice: 3200,
  }]
  constructor() { }

  ngOnInit() {
  }


}

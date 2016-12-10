import { OrderService } from './../order.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.css']
})
export class TableDetailComponent implements OnInit {
  tableId;
  tableInfo;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _orderService: OrderService
  ) {
    this._route.params.subscribe(param => {
      console.log('tableID is ', param);
      this.tableId = param['id'];
    })
  }

  ngOnInit() {
    this.tableInfo = this._orderService.mockData[this.tableId];
  }

}

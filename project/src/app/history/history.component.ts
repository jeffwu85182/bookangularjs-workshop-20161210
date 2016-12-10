import { OrderService } from './../order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  orderData
  constructor(private _orderService: OrderService) { 
    this.orderData = this._orderService.mockData;
  }

  ngOnInit() {
  }

}

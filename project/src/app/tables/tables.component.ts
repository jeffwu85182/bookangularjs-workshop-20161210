import { OrderService } from './../order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  orderData;
  constructor(private _orderService: OrderService ) {
   }

  ngOnInit() {
    this.orderData = this._orderService.mockData;
  }


}

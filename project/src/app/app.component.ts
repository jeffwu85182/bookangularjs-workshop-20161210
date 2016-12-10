import { Router } from '@angular/router';
import { OrderData } from './interfaces/order.interface';
import { OrderService } from './order.service';
import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _orderService: OrderService, private _router: Router) { }

  newTable() {
    let newTime = moment().format('HH:mm');
    let checkout = moment(newTime).add(1, 'hours').format('HH:mm');
    let obj: OrderData = {
      orderTime: newTime,
      person: 0,
      orderPrice: 0,
      checkout: checkout,
      comment: '',
      itemList: [
      ]
    };
    this._orderService.mockData.push(obj);
  }
}

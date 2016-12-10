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
    let checkout = moment().add(1, 'hours').format('HH:mm');
    let people = Math.floor(Math.random() * 6) + 1;
    let obj: OrderData = {
      orderTime: newTime,
      person: people,
      orderPrice: 0,
      checkout: checkout,
      comment: '',
      itemList: [
      ]
    };
    this._orderService.mockData.push(obj);
  }
}

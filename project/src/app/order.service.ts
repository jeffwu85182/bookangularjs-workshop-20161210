import { OrderData, ProductData } from './interfaces/order.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {
  public mockData: OrderData[] = [{
    orderTime: '12:00',
    person: 2,
    orderPrice: 300,
    checkout: '13:30',
    comment: 'leave without saying hello',
    itemList: [
      {
        itemName: 'Coffee',
        price: 200
      },
      {
        itemName: 'Cake',
        price: 150
      }
    ]
  },
  {
    orderTime: '12:00',
    person: 4,
    orderPrice: 320,
    checkout: '13:30',
    comment: 'leave without saying hello',
    itemList: [
      {
        itemName: 'Coffee',
        price: 200
      }
    ]
  },
  {
    orderTime: '12:00',
    person: 6,
    orderPrice: 3200,
    checkout: '13:30',
    comment: 'leave without saying hello',
    itemList: [
      {
        itemName: 'Coffee',
        price: 200
      }
    ]
  }]

  products: ProductData[] = [
    {
    productName: 'Coffee',
    productPrice: 200
  },{
    productName: 'Cake',
    productPrice: 150
  },{
    productName: 'Hot Dog',
    productPrice: 200
  },{
    productName: 'Salad',
    productPrice: 500
  },{
    productName: 'Desert',
    productPrice: 250
  }]

  constructor() { }

}

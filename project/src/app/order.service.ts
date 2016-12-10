import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {
  public mockData = [{
    orderTime: '12:00',
    person: 2,
    orderPrice: 300,
    ckeckout: '13:30',
    comment: 'leave without saying hello'
  },
  {
    orderTime: '12:00',
    person: 4,
    orderPrice: 320,
    ckeckout: '13:30',
    comment: 'leave without saying hello'
  },
  {
    orderTime: '12:00',
    person: 6,
    orderPrice: 3200,
    ckeckout: '13:30',
    comment: 'leave without saying hello'
  }]
  constructor() { }

}

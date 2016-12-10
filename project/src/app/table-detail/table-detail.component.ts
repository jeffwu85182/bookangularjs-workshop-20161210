import { OrderData, ProductData, ItemList } from './../interfaces/order.interface';
import { OrderService } from './../order.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-detail',
  templateUrl: './table-detail.component.html',
  styleUrls: ['./table-detail.component.css']
})
export class TableDetailComponent implements OnInit {
  tableId: number;
  tableInfo: OrderData;
  totalPrice: number = 0;
  productList: ProductData[];
  selectProd: any = 0;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _orderService: OrderService
  ) {
    this.productList = this._orderService.products;
    this._route.params.subscribe(param => {
      console.log('tableID is ', param);
      this.tableId = param['id'];
    })
  }

  ngOnInit() {
    this.tableInfo = this._orderService.mockData[this.tableId];
    this.tableInfo.itemList.forEach(e => {
      this.totalPrice += e.price;
    })
  }

  add() {
    let prod: ItemList = {
      itemName: this.productList[this.selectProd].productName,
      price: this.productList[this.selectProd].productPrice
    };

    this.tableInfo.itemList.push(prod);
    this.totalPrice += prod.price;
  }

  remove(index) {
    this.totalPrice -= this.tableInfo.itemList[index].price;
    this.tableInfo.itemList.splice(index, 1);
  }

  saveOrder() {
    console.log(this.tableInfo);
    this._orderService.mockData[this.tableId] = this.tableInfo;
    this.tableInfo.orderPrice = this.totalPrice;
    this._router.navigate(['tables']);
  }

}

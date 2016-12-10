export interface OrderData {
    orderTime: string;
    person: number;
    orderPrice: number;
    checkout: string;
    comment: string;
    itemList: ItemList[]
}

export interface ProductData {
    productName: string;
    productPrice: number;
}

export interface ItemList {
    itemName: string;
    price: number
}
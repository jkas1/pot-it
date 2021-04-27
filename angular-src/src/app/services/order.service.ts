import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private products: ProductResponseModel[] = [];
  private serverURL = environment.serverURL;

  constructor(private http: HttpClient) {}

  getSingleOrder(orderId: Number) {
    return this.http
      .get<ProductResponseModel[]>(this.serverURL + 'orders/' + orderId)
      .toPromise();
  }
}

interface ProductResponseModel {
  id: Number;
  title: String;
  description: String;
  price: Number;
  quantityOrdered: Number;
  image: String;
}

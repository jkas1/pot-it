import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductModelServer, serverResponse } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private serverURL = environment.serverURL;

  constructor(private http: HttpClient) {}

  // get all products from backend server
  getAllProducts(limitOfResults = 10): Observable<serverResponse> {
    return this.http.get<serverResponse>(this.serverURL + 'products', {
      params: {
        limit: limitOfResults.toString(),
      },
    });
  }

  // get single product from backend server
  getSingleProduct(id: Number): Observable<ProductModelServer> {
    return this.http.get<ProductModelServer>(this.serverURL + 'products/' + id);
  }

  //get products from one category
  getProductsFromCategory(catName: String): Observable<ProductModelServer[]> {
    return this.http.get<ProductModelServer[]>(
      this.serverURL + 'products/category/' + catName
    );
  }
}

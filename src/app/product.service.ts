import { Iproduct } from './product-list/product';
import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class ProductService {
  private _productUrl= 'assets/product.json';
  constructor(private _http: Http) { }
  getProducts(): Observable <Iproduct[]> {
    return this._http.get(this._productUrl).map((response: Response) => <Iproduct[]>response.json())
    .do(data => console.log('all:' + JSON.stringify(data))).catch(this.handleError);
  }


  getSingleProduct(id: number): Observable<Iproduct> {
    return this.getProducts()
    .map((products: Iproduct[]) => products.find(p => p.productId === id));

  }
  private handleError(error: Response) {
  console.error(error);
return Observable.throw(error.json().error || 'server Error');

  }
}

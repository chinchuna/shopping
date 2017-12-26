import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Iproduct} from './product';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  // selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})



export class ProductListComponent implements OnInit {
  PageTitle: String= 'Product List..!';
  showImage: Boolean= false;
  displayedColumns = ['select', 'productId', 'productName', 'productCode', 'price', 'starRating'];
  products: Iproduct[];
  errorMessage: string;
  dataSource= new MatTableDataSource(this.products);
Show_Image(): void {
    this.showImage = ! this.showImage;
}

applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;

  }

  constructor(private _productService: ProductService) {
  }
  ngOnInit(): void {
   this._productService.getProducts().subscribe(products => { this.products = products;
    this.dataSource = new MatTableDataSource(this.products);
   }, error => this.errorMessage = <any>error);
  }


}

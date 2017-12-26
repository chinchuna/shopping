import { Iproduct } from './../product-list/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: String = 'Product Detail';
  product: Iproduct;
  errorMessage: string;

  constructor(private _route: ActivatedRoute, private _productService: ProductService, private _router: Router) {

   }

  ngOnInit(): void {
    const id = +this._route.snapshot.params['id'];
    console.log(id);
    this.pageTitle += `: ${id}`;
    this.getSingleProduct(id);
  }

  onBack(): void {
    this._router.navigate(['/products']);
  }

  getSingleProduct(id: number) {
    this._productService.getSingleProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }
}



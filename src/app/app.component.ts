import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div><h1>{{ pageTitle }}</h1><div><app-product-list></app-product-list></div>
   `
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: String = 'Acme Product Management';
}

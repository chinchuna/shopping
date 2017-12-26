import { Component } from '@angular/core';
import { providerDef } from '@angular/core/src/view/provider';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'

  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: String = 'Acme Product Management';
}

import { Component, OnChanges, Input } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() ratings: number;
  starWidth: number;
  constructor() { }

  ngOnChanges(): void {
    this.starWidth = this.ratings * 86 / 5  ;
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',  // Selector for this component.
  templateUrl: './star-rating.component.html',  // HTML template file for the component.
  styleUrls: ['./star-rating.component.scss']  // Styles or CSS file for the component.
})
export class StarRatingComponent implements OnInit {

  @Input() rating: any;  // Input property to receive the rating value.
  @Input() isReadOnly: boolean = false;  // Input property to make the rating read-only if needed.

  constructor() {
    // The constructor is intentionally empty because there's no need for additional initialization in this component.
  }

  ngOnInit(): void {
    // The ngOnInit method is intentionally empty because there's no specific initialization logic required for this component.
  }
}

import { Component } from '@angular/core';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-content-component',
  templateUrl: './content-component.component.html',
  styleUrls: ['./content-component.component.css']
})
export class ContentComponentComponent {
  contentUnlocked = false;

  constructor(private contentService: ContentService) {
    this.contentUnlocked = this.contentService.isContentUnlocked();
  }

  checkout() {
    // Call Stripe's Checkout, and if the payment is successful, unlock the full content
    window.location.href = 'https://buy.stripe.com/test_6oE3cVcaZ3fie4M000';

  }
}

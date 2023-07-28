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
    window.location.href = 'https://buy.stripe.com/9AQ4iD8PZ9cY9YQaEF';
  }
}

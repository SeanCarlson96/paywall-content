import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-success',
  template: `
    <p>
      Processing your purchase...
    </p>
  `,
  styles: []
})
export class SuccessComponentComponent implements OnInit {

  constructor(private contentService: ContentService, private router: Router) { }

  ngOnInit(): void {
    this.contentService.unlockContent();
    this.router.navigate(['/']);
  }

}

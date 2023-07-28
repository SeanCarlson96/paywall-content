import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private contentUnlocked = false;

  isContentUnlocked() {
    return this.contentUnlocked;
  }

  unlockContent() {
    this.contentUnlocked = true;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private contentUnlocked = false;

  constructor() {}

  isContentUnlocked(): boolean {
    // Check if the content is unlocked. In a real-world application, this might
    // involve checking a value stored in localStorage, or a value returned from a server.
    return this.contentUnlocked;
  }

  unlockContent(): void {
    // Unlock the content. In a real-world application, you might store a value in localStorage,
    // or send a request to a server.
    this.contentUnlocked = true;
  }
}

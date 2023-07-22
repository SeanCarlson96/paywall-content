import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponentComponent } from './hero-component/hero-component.component';
import { ContentComponentComponent } from './content-component/content-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponentComponent,
    ContentComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

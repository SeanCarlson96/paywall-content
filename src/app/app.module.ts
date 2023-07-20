import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponentComponent } from './hero-component/hero-component.component';
import { PreviewComponentComponent } from './preview-component/preview-component.component';
import { CheckoutComponentComponent } from './checkout-component/checkout-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponentComponent,
    PreviewComponentComponent,
    CheckoutComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

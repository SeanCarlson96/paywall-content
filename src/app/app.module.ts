import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponentComponent } from './hero-component/hero-component.component';
import { ContentComponentComponent } from './content-component/content-component.component';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponentComponent } from './success-component/success-component.component';

const appRoutes: Routes = [
  { path: '7gT96vB2Z6X1R8JQZ5fY', component: SuccessComponentComponent },
  { path: '', component: ContentComponentComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    HeroComponentComponent,
    ContentComponentComponent,
    SuccessComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

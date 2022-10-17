import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontSizeEditoComponent } from './font-size-edito/font-size-edito.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

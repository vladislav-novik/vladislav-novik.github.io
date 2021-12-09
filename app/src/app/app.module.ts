import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClubhouseViewComponent } from './components/clubhouse-view/clubhouse-view.component';
import { WorldViewComponent } from './components/world-view/world-view.component';
import { SafeHtmlPipe } from './pipes/safe-html';

@NgModule({
  declarations: [
    AppComponent,
    WorldViewComponent,
    ClubhouseViewComponent,
    SafeHtmlPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

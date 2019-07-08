import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {TimeAgoPipe} from 'time-ago-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { DateCountPipe } from './date-count.pipe';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    DateCountPipe,
    QuoteFormComponent,
    TimeAgoPipe,
    HighlightDirective
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

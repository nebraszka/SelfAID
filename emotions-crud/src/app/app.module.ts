import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmotionsComponent } from './emotions/emotions.component';
import { EmotionDetailComponent } from './emotion-detail/emotion-detail.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { EmotionJournalStartComponent } from './emotion-journal-start/emotion-journal-start.component';

@NgModule({
  declarations: [
    AppComponent,
    EmotionsComponent,
    EmotionDetailComponent,
    StartScreenComponent,
    EmotionJournalStartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

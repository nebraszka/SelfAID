import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmotionsComponent } from './emotions/emotions.component';
import { EmotionDetailComponent } from './emotion-detail/emotion-detail.component';
import { AppRoutingModule } from './app-routing.module';

import { StartScreenComponent } from './start-screen/start-screen.component';
import { EmotionJournalStartComponent } from './emotion-journal-start/emotion-journal-start.component';
import { NewEntryComponent } from './new-entry/new-entry.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmotionsComponent,
    EmotionDetailComponent,
    StartScreenComponent,
    EmotionJournalStartComponent,
    NewEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    MdbDropdownModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

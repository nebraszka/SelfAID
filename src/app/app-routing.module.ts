import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmotionsComponent } from './emotions/emotions.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { EmotionJournalStartComponent } from './emotion-journal-start/emotion-journal-start.component';
import { NewEntryComponent } from './new-entry/new-entry.component';

const routes: Routes = [
  { path: 'emotions', component: EmotionsComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: StartScreenComponent},
  { path: 'emotion-journal', component: EmotionJournalStartComponent},
  { path: 'new-entry', component: NewEntryComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

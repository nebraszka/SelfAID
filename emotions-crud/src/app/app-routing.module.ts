import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmotionsComponent } from './emotions/emotions.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { EmotionJournalStartComponent } from './emotion-journal-start/emotion-journal-start.component';

const routes: Routes = [
  { path: 'emotions', component: EmotionsComponent },
  { path: '', redirectTo: '/emotions', pathMatch: 'full' },
  { path: 'test', component: StartScreenComponent},
  { path: 'test2', component: EmotionJournalStartComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

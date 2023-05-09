import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emotion-journal-start',
  templateUrl: './emotion-journal-start.component.html',
  styleUrls: ['./emotion-journal-start.component.css']
})
export class EmotionJournalStartComponent {

  constructor(public router: Router) {}
}

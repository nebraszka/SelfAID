import { Component, OnInit } from '@angular/core';

import { Emotion, NewEmotion } from '../emotion';
import { EmotionService } from '../emotion.service';
import { IndexedDBService } from '../indexed-db.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-emotion',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.css']
})

export class EmotionsComponent {

  emotions$?: Observable<Emotion[]>;

  constructor(private indexedDBService: IndexedDBService) { }

  async ngOnInit(){
    this.emotions$ = this.indexedDBService.emotions;
  }

  async addEmotion() {
    const emotion: NewEmotion = {
      name: "blabla",
      description: " blaaaaa"
    };

    await this.indexedDBService.addEmotion(emotion);
  }
}

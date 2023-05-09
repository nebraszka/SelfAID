import { Component, OnInit } from '@angular/core';

import { Emotion, NewEmotion } from '../emotion';
import { IndexedDBService } from '../indexed-db.service';
import { Observable } from 'rxjs/internal/Observable';
import { EncryptionService } from '../encryption.service';

@Component({
  selector: 'app-emotion',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.css']
})

export class EmotionsComponent {

  emotions$?: Observable<Emotion[]>;

  constructor(private indexedDBService: IndexedDBService, public encryptionService : EncryptionService) { }

  async ngOnInit(){
    this.emotions$ = this.indexedDBService.emotions;
  }

  async addEmotion(name: string) {
    const emotion: NewEmotion = {
      name: name,
      description: ""
    };

    await this.indexedDBService.addEmotion(emotion);
  }

  async deleteEmotion(emotion: Emotion) {
    await this.indexedDBService.deleteEmotion(emotion.id);
  }

  async updateEmotion(emotion: Emotion, newName: string) {
    await this.indexedDBService.updateEmotion(emotion.id, newName);
  }

}

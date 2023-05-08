import { Component, OnInit } from '@angular/core';

import { Emotion } from '../emotion';
import { EmotionService } from '../emotion.service';

@Component({
  selector: 'app-emotion',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.css']
})
export class EmotionsComponent {

  emotions: Emotion[] = []

  constructor(private emotionService: EmotionService) { }

  ngOnInit(){
    this.getEmotions();
  }

  getEmotions(): void {
   this.emotionService.getEmotions()
   .subscribe(emotions => this.emotions = emotions)
  }

  add(name: string): void {
    name = name.trim();
    if(!name) {return;}
    this.emotionService.addEmotion( {name} as Emotion)
      .subscribe(emotion => this.emotions.push(emotion));
  }
}

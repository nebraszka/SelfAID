import { Component } from '@angular/core';
import { Emotion } from '../emotion';

@Component({
  selector: 'app-emotion',
  templateUrl: './emotions.component.html',
  styleUrls: ['./emotions.component.css']
})
export class EmotionsComponent {
  emotions: Emotion[] = []
  emotion: Emotion = {id: 1, name: 'złość', description: 'opis'};

  constructor(){
    this.emotions.push(this.emotion);
  }
}

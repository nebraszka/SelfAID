import { Injectable } from '@angular/core';
import { Emotion } from './emotion'

@Injectable({
  providedIn: 'root'
})
export class EmotionService {

  getEmotions(){
    // TODO(nebraszka): get emotions from db
  }
}

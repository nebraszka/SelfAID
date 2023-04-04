import { Injectable } from '@angular/core';
import { Emotion } from './emotion'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmotionService {
  constructor(private http: HttpClient) { }

  private emotionsUrl = 'api/emotions';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getEmotions(): Observable<Emotion[]> {
    return this.http.get<Emotion[]>(this.emotionsUrl);
  }
}

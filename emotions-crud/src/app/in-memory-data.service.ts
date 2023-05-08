import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const emotions = [
      {id: 1, name: 'radość'},
      {id: 3, name: 'strach'}
    ];
    return {emotions};
  }
}

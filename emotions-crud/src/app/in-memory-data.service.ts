import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const emotions = [
<<<<<<< HEAD
      {id: 1, name: 'radość'},
      {id: 3, name: 'strach'}
=======
      {id: 1, name: 'radość'}
>>>>>>> 9294fb0 (Add prototypes of the essential parts of the CRUD project)
    ];
    return {emotions};
  }
}

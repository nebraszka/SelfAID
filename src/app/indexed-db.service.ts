import { Injectable } from '@angular/core';
import { DBSchema, IDBPDatabase, openDB } from 'idb';
import { Emotion, NewEmotion } from './emotion';
import { BehaviorSubject, Observable} from 'rxjs';
import { EncryptionService } from './encryption.service';

interface MyDB extends DBSchema {
  emotions: {
    value: Emotion;
    key: string;
    indexes: { 'by-name': string };
  };
}

@Injectable({providedIn: 'root'})
export class IndexedDBService {

  private emotionsSubject = new BehaviorSubject<Emotion[]>([]);
  db!: IDBPDatabase<MyDB>;

  constructor(private encryptionService : EncryptionService) {
    this.createDb().then(db => {
      this.db = db;
      this.getAllEmotions().then(emotions => this.emotionsSubject.next(emotions));
    });
  }

  async addEmotion(emotion: NewEmotion): Promise<Emotion> {

    await this.waitForDb();

    let newEmotionId = await this.db.put('emotions', emotion as Emotion);
    this.emotionsSubject.next(await this.getAllEmotions());
    return {...emotion, id: newEmotionId};

  }

  async getAllEmotions(): Promise<Emotion[]> {

    await this.waitForDb();

    const emotions: Emotion[] = await this.db?.getAll('emotions');
    return emotions;
  }

  async deleteEmotion(emotionId: string|IDBKeyRange) {

    await this.waitForDb();

    const emotion: any = await this.db.delete('emotions', emotionId);

    this.emotionsSubject.next(await this.getAllEmotions());

    return emotion;

  }

  async updateEmotion(emotionId: string | IDBKeyRange, newName: string) {
    await this.waitForDb();
  
    const emotion = await this.db.get('emotions', emotionId);
  
    if (emotion) {
      const updatedEmotion = {
        ...emotion,
        name: this.encryptionService.encryptData(newName)
      };

      await this.db.put('emotions', {name: updatedEmotion.name, description:'', id: emotion.id});
      
      this.emotionsSubject.next(await this.getAllEmotions());
    }
  }

  get emotions(): Observable<Emotion[]> {
    return this.emotionsSubject.asObservable();
  }

  async createDb() {
    const db = await openDB<MyDB>('crudDatabase', 2, {
      upgrade(db) {
        const productStore = db.createObjectStore('emotions', {
          keyPath: 'id',
          autoIncrement: true
        });
        productStore.createIndex('by-name', 'name');
      },
    });

    return db;
  }

  private async waitForDb() {
    if(!this.db) {
      this.db = await this.createDb();
    }

    return;
  }
}

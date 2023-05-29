import { Injectable } from '@angular/core';
import { DBSchema, IDBPDatabase, openDB } from 'idb';
import { Emotion, NewEmotion } from './emotion';
import { Entry } from './entry';
import { BehaviorSubject, Observable } from 'rxjs';
import { EncryptionService } from './encryption.service';

interface MyDB extends DBSchema {
  emotions: {
    value: Emotion;
    key: string;
    indexes: { 'by-name': string };
  };
  entries: {
    value: Entry;
    key: string;
    indexes: { 'by-date': string };
  };
}

@Injectable({ providedIn: 'root' })
export class IndexedDBService {

  private emotionsSubject = new BehaviorSubject<Emotion[]>([]);
  db!: IDBPDatabase<MyDB>;

  private entriesSubject = new BehaviorSubject<Entry[]>([]);

  constructor(private encryptionService: EncryptionService) {
    this.createDb().then(db => {
      this.db = db;
      this.getAllEmotions().then(emotions => this.emotionsSubject.next(emotions));
      this.getAllEntries().then(entries => this.entriesSubject.next(entries));
    });
  }

  async addEntry(entry: Entry): Promise<Entry> {
    await this.waitForDb();
    const newEntryId = await this.db.put('entries', entry);
    this.entriesSubject.next(await this.getAllEntries());
    return { ...entry, id: newEntryId };
  }

  async getAllEntries(): Promise<Entry[]> {
    await this.waitForDb();
    const entries: Entry[] = await this.db?.getAll('entries');
    return entries;
  }

  async addEmotion(emotion: NewEmotion): Promise<Emotion> {

    await this.waitForDb();

    const newEmotionId = await this.db.put('emotions', emotion as Emotion);
    this.emotionsSubject.next(await this.getAllEmotions());
    return { ...emotion, id: newEmotionId };

  }

  async getAllEmotions(): Promise<Emotion[]> {

    await this.waitForDb();
    // TODO(GPT) ask gpt whats the difference between this solution and return this.emotionsSubject.asObservable();
    const emotions: Emotion[] = await this.db?.getAll('emotions');
    return emotions;
  }

  async deleteEmotion(emotionId: string | IDBKeyRange) {

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

      await this.db.put('emotions', { name: updatedEmotion.name, description: '', id: emotion.id });

      this.emotionsSubject.next(await this.getAllEmotions());
    }
  }

  get entries(): Observable<Entry[]> {
    return this.entriesSubject.asObservable();
  }

  get emotions(): Observable<Emotion[]> {
    return this.emotionsSubject.asObservable();
  }


  async createDb() {
    const db = await openDB<MyDB>('crudDatabase', 3, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('emotions')) {
          const productStore = db.createObjectStore('emotions', {
            keyPath: 'id',
            autoIncrement: true
          });
          productStore.createIndex('by-name', 'name');
        }
  
        if (!db.objectStoreNames.contains('entries')) {
          const entriesStore = db.createObjectStore('entries', {
            keyPath: 'id',
            autoIncrement: true
          });
          entriesStore.createIndex('by-date', 'date');
        }
      },
    });

    return db;
  }

  private async waitForDb() {
    if (!this.db) {
      this.db = await this.createDb();
    }

    return;
  }
}

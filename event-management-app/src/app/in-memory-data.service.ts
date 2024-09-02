import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const events = [
      { id: 1, name: 'Event 1', description: 'Description for event 1' },
      { id: 2, name: 'Event 2', description: 'Description for event 2' }
    ];
    return { events };
  }
}
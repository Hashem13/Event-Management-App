import { Injectable } from '@angular/core';
import { Event } from './event';
import { EVENTS } from './mock-events';
import { Observable, of } from 'rxjs';
import { LogsService } from './logs.service';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private logsService: LogsService) { }

  getEvents(): Observable<Event[]> {
    // TODO: send the message _after_ fetching the heroes
    this.logsService.add('LogService: fetched Events');
    return of(EVENTS);
  }
}

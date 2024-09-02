import { Component } from '@angular/core';
import { Event } from '../event';
import { EVENTS } from '../mock-events';
import { EventService } from '../event.service';
import { LogsService } from '../logs.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  constructor(private eventService: EventService, private logsService: LogsService){}

  events: Event[] = [];

 getEvents(): void {
    this.eventService.getEvents()
        .subscribe(events=> this.events = events);
 }

 ngOnInit() {
  this.getEvents();
}

  selectedEvent?: Event;

  onSelect(event: Event): void {
    this.selectedEvent = event;
    this.logsService.add(`EventsComponent: Selected event id=${event.id}`);
}
}

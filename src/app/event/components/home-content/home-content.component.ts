import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../services/events.service";
//import { Event } from '../thebigfun/models/event.model';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  events=<any> [];

  constructor(private eventService:EventsService) {  }

  ngOnInit(): void {
    this.getAllEvents();
    this.addAttendeeToEvent();
    this.addEventToOrganizer();
    this.addPaymentToEvent();
  }

  getAllEvents() {
    this.eventService.getAll().subscribe((response: any) => {
      if (Array.isArray(response.content)) {
        this.events = response.content;
        console.log(this.events);
      } else {
        console.error('Invalid response format: events array not found');
      }
    });
  }
  addAttendeeToEvent(){
    const eventId = 3;
    const attendeeId = 1;
    this.eventService.addAttendeeToEvent(eventId, attendeeId).subscribe(
      () => {
        // Handle the success case if necessary
        console.log("Attendee was added correctly");
      },
      (error: any) => {
        // Handle the error if it occurs
        console.error(error);
      }
    );
  }
  addEventToOrganizer(){
    const eventId = 3;
    const organizerId = 1;
    this.eventService.addEventToOrganizer(organizerId, eventId).subscribe(
      () => {
        // Handle the success case if necessary
        console.log("Organizer was added correctly");
      },
      (error: any) => {
        // Handle the error if it occurs
        console.error(error);
      }
    );
  }
  addPaymentToEvent(){
    const eventId = 3;
    const paymentId = 1;
    this.eventService.addPayamentToEvent(paymentId, eventId).subscribe(
      () => {
        // Handle the success case if necessary
        console.log("Organizer was added correctly");
      },
      (error: any) => {
        // Handle the error if it occurs
        console.error(error);
      }
    );
  }

}

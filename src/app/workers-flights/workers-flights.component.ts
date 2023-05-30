import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFlight } from '../interfaces/flight';

@Component({
  selector: 'app-workers-flights',
  templateUrl: './workers-flights.component.html',
  styleUrls: ['./workers-flights.component.scss']
})
export class WorkersFlightsComponent {
  @Input() flights: IFlight[] = [];
  @Output() selectedFlightChange = new EventEmitter<IFlight>;

  displayedColumns: string[] = ['num', 'from', 'from_date', 'to', 'to_date'];

  selectedFlightId: string | undefined;

  selectFlight(flight: IFlight) {
    this.selectedFlightId = flight.num
    this.selectedFlightChange.emit(flight);
  }
}

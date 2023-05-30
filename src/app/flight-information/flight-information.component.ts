import { Component, Input } from '@angular/core';
import { IFlight } from '../interfaces/flight';

@Component({
  selector: 'app-flight-information',
  templateUrl: './flight-information.component.html',
  styleUrls: ['./flight-information.component.scss']
})
export class FlightInformationComponent {
  @Input() flight: IFlight | undefined;
}

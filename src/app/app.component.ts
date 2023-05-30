import { Component } from '@angular/core';
import { IWorker } from './interfaces/worker';
import { WorkersService } from './workers-service/workers-service.service';
import { IFlight } from './interfaces/flight';
import { Subscription, interval, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  flightsSub: Subscription | undefined;
  workers: IWorker[] = [];
  flights: IFlight[] = [];
  selectedFlight: IFlight | undefined;
  selectedWorkerId: number | undefined;

  readonly ONE_MINUTE = 60 * 1000;

  constructor(private workersService: WorkersService) { }

  ngOnInit() {
    this.workersService.getWorkers().subscribe((workers => {
      this.workers = workers
      this.getFlightsByWorkerId(this.workers[0].id);
    }))
  }


  ngOnDistroy() {
    this.flightsSub?.unsubscribe();
  }

  getFlightsByWorkerId(id: any) {

    this.flightsSub?.unsubscribe();

    this.flightsSub = timer(0, this.ONE_MINUTE).pipe(
      switchMap(i => this.workersService.getFlightsByWorkerId(id))).subscribe(flights => {
        this.flights = flights
      })
  }

  setSelectedWorker(id: number) {
    if (id !== this.selectedWorkerId) {
      this.selectedFlight = undefined;
    }

    this.selectedWorkerId = id;
    this.getFlightsByWorkerId(id);
  }

  setSelectedFligth(selectedFlight: IFlight) {
    this.selectedFlight = selectedFlight;
  }
}

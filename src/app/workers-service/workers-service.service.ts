import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { IWorker } from '../interfaces/worker';
import { IFlight } from '../interfaces/flight';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor(private http: HttpClient) { }

  getWorkers(): Observable<IWorker[]> {
    return this.http.get<IWorker[]>('/api/workers');


  }

  getFlightsByWorkerId(id: number): Observable<IFlight[]> {
    return this.http.get<IFlight[]>(`/api/flights/${id}`);

  }
}

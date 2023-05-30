import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WorkersListComponent } from './workers-list/workers-list.component';
import { WorkersFlightsComponent } from './workers-flights/workers-flights.component';
import { FlightInformationComponent } from './flight-information/flight-information.component';
import { MatListModule } from '@angular/material/list';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { DurationPipe } from './pipes/duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WorkersListComponent,
    WorkersFlightsComponent,
    FlightInformationComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    MatDividerModule,
    HttpClientJsonpModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

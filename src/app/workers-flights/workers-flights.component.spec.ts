import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersFlightsComponent } from './workers-flights.component';

describe('WorkersFlightsComponent', () => {
  let component: WorkersFlightsComponent;
  let fixture: ComponentFixture<WorkersFlightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkersFlightsComponent]
    });
    fixture = TestBed.createComponent(WorkersFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

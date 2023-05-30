import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IWorker } from '../interfaces/worker';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.scss']
})
export class WorkersListComponent {
  @Input() workers: IWorker[] = [];
  @Output() selectedWorkerChange = new EventEmitter<number>();

  workerId: number | undefined

  selectWorker(workerId: number) {

    this.workerId = workerId;
    this.selectedWorkerChange.emit(workerId)
  }
}

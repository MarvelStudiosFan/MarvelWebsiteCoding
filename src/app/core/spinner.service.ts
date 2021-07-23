import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';

export interface SpinnerState {
  show: boolean;
}

@Injectable({ providedIn: 'root' })
export class SpinnerService {
  private spinnerSubject = new Subject<SpinnerState>();

  spinnerState = this.spinnerSubject.asObservable();

  constructor(
    @Optional()
    @SkipSelf()
    prior: SpinnerService
  ) {
    if (prior) {
      return prior;
    }
    console.log('created spinner service');
  }

  show() {
    this.spinnerSubject.next(<SpinnerState>{ show: true });
  }

  hide() {
    this.spinnerSubject.next(<SpinnerState>{ show: false });
  }
}

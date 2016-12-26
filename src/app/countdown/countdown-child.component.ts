import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'countdown-child',
  templateUrl: './countdown-child.component.html'
})
export class CountdownChildComponent implements OnInit, OnDestroy {
  intervalId = 0;
  message = 'Hello';
  seconds = 0;

  ngOnInit()    { this.start(); }
  ngOnDestroy() { this.clearTimer(); }

  clearTimer() { clearInterval(this.intervalId); }

  start(){ this.countDown() };
  stop(){ this.clearTimer(); };

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) { this.seconds = 10; } // reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
  }


}

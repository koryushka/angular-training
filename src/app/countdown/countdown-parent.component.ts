import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CountdownChildComponent } from './countdown-child.component'

//// Local variable, #timer, version
@Component({
  selector: 'countdown-parent-lv',
  template: `
    <h3>Countdown to Liftoff (via local variable)</h3>
    <button (click)="countdownChild.start()">Start</button>
    <button (click)="countdownChild.stop()">Stop</button>
    <div class="seconds">{{countdownChild.seconds}}</div>
    <countdown-child #countdownChild></countdown-child>
  `
})
export class CountdownLocalVarParentComponent { }

// View Child version
@Component({
  selector: 'countdown-parent-vc',
  template: `
  <h3>Countdown to Liftoff (via ViewChild)</h3>
  <button (click)="start()">Start</button>
  <button (click)="stop()">Stop</button>
  <div class="seconds">{{ seconds() }}</div>
  <countdown-child></countdown-child>
  `
})
export class CountdownViewChildParentComponent implements AfterViewInit {

  @ViewChild(CountdownChildComponent)
  private timerComponent: CountdownChildComponent;

  seconds() { return 0; }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    console.debug("Seconds: ", this.seconds)
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }
}

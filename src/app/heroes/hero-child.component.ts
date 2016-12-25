import { Component, Input } from '@angular/core';
import { Hero } from '.././heroes/hero'

@Component({
  selector: 'hero-child',
  templateUrl: '.././heroes/hero-child.component.html'

})
export class HeroChildComponent{
  @Input() hero: Hero;
  @Input('master') masterName: string;
}

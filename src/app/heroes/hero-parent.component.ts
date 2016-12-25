import { Component } from '@angular/core';
import { HEROES } from '.././heroes/hero'

@Component({
  selector: 'hero-parent',
  templateUrl: '.././heroes/hero-parent.component.html'

})
export class  HeroParentComponent{
  heroes = HEROES;
  master:string = "Master";

}

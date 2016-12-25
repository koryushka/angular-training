import { Component } from '@angular/core';

@Component({
  selector: 'version-parent',
  templateUrl: '.././versions/version-parent.component.html'
})
export class VersionParentComponent{
  major: number = 1;
  minor: number = 23;

  setMinor(){
    this.minor++;
  }

  setMajor(){
    this.minor = 0;
    this.major++;
  }
}

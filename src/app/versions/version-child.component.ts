import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'version-child',
  templateUrl: '.././versions/version-child.component.html'



})
export class VersionChildComponent implements OnChanges {
  @Input() major: number;
  @Input() minor: number;
  private i:number = 0;
  changeLog: string[] = [];

  ngOnChanges(changes: {[propKey: string]: SimpleChange}){
    let log = []
    for ( let change in changes){
      let property = changes[change]
      let name = change
      console.debug("Propoerty", name)
      let from = JSON.stringify(property.previousValue);
      let to = JSON.stringify(property.currentValue)

      log.push(`${name} changes released: from version ${from} to ${to}`)
    }
    this.changeLog.push(log.join(', '))
  }
}

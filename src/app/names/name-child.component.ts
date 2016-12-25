import { Component, Input } from '@angular/core';

@Component({
  selector: 'name-child',
  templateUrl: '.././names/name-child.component.html'


})
export class  NameChildComponent{
  private _name:string = '';

  @Input()
  set name(name: string){
    this._name = (name && name.trim()) || 'No name';
  }

  get name(){ return this._name}
}

import { Component, Input } from '@angular/core';
import { MissionService } from './mission.service';
import { Subscription }   from 'rxjs/Subscription';
@Component({
  selector: 'astronaut',
  templateUrl: './astronaut.component.html'
})

export class AstronautComponent{
  @Input() astronaut: string;
  mission = '<No mission announced>'
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission = mission;
        this.announced = true;
        this.confirmed = false;
    });
  }

  confirm(){
    this.missionService.confirmMission(this.astronaut);
    this.confirmed=true;
  }
}

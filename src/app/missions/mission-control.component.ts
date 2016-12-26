import { Component } from '@angular/core';
import { MissionService } from './mission.service'

@Component({
  selector: 'mission-control',
  templateUrl: './mission-control.component.html',
  providers: [MissionService]
})

export class MissionControlComponent{
  astronauts = ['Lovell', 'Swigert', 'Haise'];
  history: string[] = [];
  missions = ['Fly to the moon!',
              'Fly to mars!',
              'Fly to Vegas!'];
  nextMission = 0;

  constructor(private missionService: MissionService){
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} confirmed the mission`);
        // console.debug("MC: ", missionService.missionConfirmed$)
      }
    );
  };

  announce(){
    let mission = this.missions[this.nextMission++]
    this.missionService.announce(mission);
    this.history.push(`Mission ${mission} announced`)
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  };

}

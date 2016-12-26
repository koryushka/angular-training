import { Component } from '@angular/core';

@Component({
  selector: 'vote-taker',
  templateUrl: '.././votes/vote-taker.component.html'



})
export class VoteTakerComponent {
  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];


  onVoteInVoteTaker(agreed: boolean){
    agreed ? this.agreed++ : this.disagreed++
  }
}

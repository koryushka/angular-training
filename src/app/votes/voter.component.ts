import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'voter',
  templateUrl: '.././votes/voter.component.html'

})
export class VoterComponent {
  @Input() voter: string;
  @Output() onVoteInVoter = new EventEmitter<boolean>();
  voted = false

  vote(agreed: boolean){
    this.onVoteInVoter.emit(agreed)
    this.voted = true
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroParentComponent } from './heroes/hero-parent.component';
import { NameParentComponent } from './names/name-parent.component';
import { VersionParentComponent } from './versions/version-parent.component';
import { VoteTakerComponent } from './votes/vote-taker.component';
import { CountdownLocalVarParentComponent } from './countdown/countdown-parent.component';
import { CountdownViewChildParentComponent } from './countdown/countdown-parent.component';
import { MissionControlComponent } from './missions/mission-control.component';


const routes: Routes = [
  {path: 'heroes', component: HeroParentComponent},
  {path: 'names', component: NameParentComponent},
  {path: 'versions', component: VersionParentComponent},
  {path: 'votes', component: VoteTakerComponent},
  {path: 'countdown', component: CountdownViewChildParentComponent},
  {path: 'countdown2', component: CountdownLocalVarParentComponent},
  {path: 'missions', component: MissionControlComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

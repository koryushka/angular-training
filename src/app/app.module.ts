import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module'

import { HeroParentComponent } from './heroes/hero-parent.component';
import { HeroChildComponent } from './heroes/hero-child.component';
import { NameParentComponent } from './names/name-parent.component';
import { NameChildComponent } from './names/name-child.component';
import { VersionParentComponent } from './versions/version-parent.component';
import { VersionChildComponent } from './versions/version-child.component';
import { VoteTakerComponent } from './votes/vote-taker.component';
import { VoterComponent } from './votes/voter.component';
import { CountdownLocalVarParentComponent } from './countdown/countdown-parent.component';
import { CountdownViewChildParentComponent } from './countdown/countdown-parent.component';
import { CountdownChildComponent } from './countdown/countdown-child.component';
import { MissionControlComponent } from './missions/mission-control.component';
import { AstronautComponent } from './missions/astronaut.component';


let directives: any[] = [
  AppComponent,
  HeroParentComponent,
  HeroChildComponent,
  NameParentComponent,
  NameChildComponent,
  VersionParentComponent,
  VersionChildComponent,
  VoteTakerComponent,
  VoterComponent,
  CountdownLocalVarParentComponent,
  CountdownViewChildParentComponent,
  CountdownChildComponent,
  MissionControlComponent,
  AstronautComponent

]

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: directives,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

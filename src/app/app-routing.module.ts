import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroParentComponent } from './heroes/hero-parent.component'

const routes: Routes = [
  {path: 'heroes', component: HeroParentComponent}

]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

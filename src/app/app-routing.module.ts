import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroParentComponent } from './heroes/hero-parent.component'
import { NameParentComponent } from './names/name-parent.component'
import { VersionParentComponent } from './versions/version-parent.component'



const routes: Routes = [
  {path: 'heroes', component: HeroParentComponent},
  {path: 'names', component: NameParentComponent},
  {path: 'versions', component: VersionParentComponent}

]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

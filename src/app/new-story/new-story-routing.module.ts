import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewStoryPage } from './new-story.page';

const routes: Routes = [
  {
    path: '',
    component: NewStoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewStoryPageRoutingModule {}

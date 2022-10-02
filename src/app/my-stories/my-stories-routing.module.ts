import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyStoriesPage } from './my-stories.page';

const routes: Routes = [
  {
    path: '',
    component: MyStoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyStoriesPageRoutingModule {}

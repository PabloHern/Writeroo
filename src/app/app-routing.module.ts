import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

  {
    path: 'my-stories',
    loadChildren: () => import('./my-stories/my-stories.module').then(m => m.MyStoriesPageModule)
  },
  {
    path: 'story/:id',
    loadChildren: () => import('./story/story.module').then(m => m.StoryPageModule)
  },
  {
    path: 'new-story',
    loadChildren: () => import('./new-story/new-story.module').then(m => m.NewStoryPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

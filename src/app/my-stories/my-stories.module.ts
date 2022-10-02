import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyStoriesPageRoutingModule } from './my-stories-routing.module';

import { MyStoriesPage } from './my-stories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyStoriesPageRoutingModule
  ],
  declarations: [MyStoriesPage]
})
export class MyStoriesPageModule {}

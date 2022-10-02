import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewStoryPageRoutingModule } from './new-story-routing.module';

import { NewStoryPage } from './new-story.page';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    NewStoryPageRoutingModule
  ],
  declarations: [NewStoryPage]
})
export class NewStoryPageModule { }

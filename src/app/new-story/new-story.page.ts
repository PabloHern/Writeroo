import { Component, NgZone, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { StoryService } from '../services/story.service';
import { Location } from '@angular/common'
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.page.html',
  styleUrls: ['./new-story.page.scss'],
})
export class NewStoryPage implements OnInit {

  storyForm: FormGroup;
  maxChar = 2000;
  textValue = '';
  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private storyService: StoryService,
    private location: Location
  ) {
    this.storyForm = this.formBuilder.group({
      title: [''],
      content: ['']
    })
  }

  ngOnInit() {
    this.textValue = '';
  }

  goBack(): void {
    this.location.back()
  }
  onSubmit() {
    if (!this.storyForm.valid) {
      return false;
    } else {
      this.storyService.createStory(this.storyForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.storyForm.reset();
            this.goBack();
          })
        });
    }
  }
}

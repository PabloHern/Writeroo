import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoryService } from '../services/story.service';
import { Location } from '@angular/common'
import { FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-story',
  templateUrl: './story.page.html',
  styleUrls: ['./story.page.scss'],
})
export class StoryPage implements OnInit {
  story: any;
  updateStoryFg: FormGroup;
  maxChar = 2000;
  textValue = '';
  id: any;
  constructor(private location: Location, private storyService: StoryService, public formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private router: Router) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
  }

  ngOnInit() {
    this.getStory(this.id)
    this.fetchStory(this.id)
    this.updateStoryFg = this.formBuilder.group({
      title: [''],
      content: ['']
    })
  }
  getStory(id: any) {
    this.storyService.getStory(id).subscribe(response => {
      this.story = response;
      this.textValue = this.story.content
    });
  }
  goBack(): void {
    this.location.back()
  }
  fetchStory(id) {
    this.storyService.getStory(id).subscribe((data) => {
      this.updateStoryFg.setValue({
        title: data['title'],
        content: data['content'],
      });
    });
  }
  onSubmit() {
    if (!this.updateStoryFg.valid) {
      return false;
    } else {
      this.storyService.updateStory(this.id, this.updateStoryFg.value)
        .subscribe(() => {
        })
    }
  }

}

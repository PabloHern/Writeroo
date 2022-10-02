import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoryService } from '../services/story.service';
import { Location } from '@angular/common'
import { jsPDF } from "jspdf";
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-my-stories',
  templateUrl: './my-stories.page.html',
  styleUrls: ['./my-stories.page.scss'],
})
export class MyStoriesPage implements OnInit {

  stories: any = [];
  story: any = '';
  doc: any;
  download: boolean = false;

  constructor(private alertController: AlertController, private storyService: StoryService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.getAllStories();
  }
  ionViewWillEnter() {
    this.getAllStories();
  }
  getAllStories() {
    this.storyService.getStories().subscribe(response => {
      this.stories = response;
    });
  }
  getStory(id: any, download) {
    this.storyService.getStory(id).subscribe(response => {
      this.story = response;
      if (download) {
        this.doc = new jsPDF();
        this.doc.setFontSize(30);
        this.doc.text(this.story.title, 10, 10, { maxWidth: 200 })
        this.doc.setFontSize(16);
        this.doc.text(this.story.content, 10, 30, { maxWidth: 190 })
        this.doc.save(`${this.story.title}.pdf`);
      }
    });
  }
  goBack(): void {
    this.location.back()
  }
  goToStory(id) {
    this.router.navigateByUrl(`/story/${id}`);
  }
  deleteStory(id) {
    this.storyService.deleteStory(id).subscribe(response => {
      this.story = response;
    });
  }
  downloadPDF(id) {
    this.download = true;
    this.getStory(id, this.download);
    this.download = false;

  }
  createStory() {
    this.router.navigateByUrl("new-story");
  }
  async presentAlert(id) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Delete story?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.deleteStory(id);
          },
        },
      ]
    });

    await alert.present();
  }
}

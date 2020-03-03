import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  peoples: any;
  peoplesSub: any;

  constructor(
    public httpClient: HttpClient,
    private navCtrl: NavController
  ) { }

  ionViewWillEnter() {
    this.loadImages();
  }

  loadImages() {
    this.peoplesSub = this.httpClient.get('https://randomuser.me/api/?results=20');
    this.peoplesSub.subscribe(data => {
      data.results.forEach(element => {
        element.random = Math.floor(Math.random() * 10) + 1 ;
        element.imgPath = 'https://picsum.photos/600/200?' + element.random;
        element.values = {
          categories: Math.floor(Math.random() * 150) + 1,
          photos: Math.floor(Math.random() * 1500) + 1,
          follower: Math.floor(Math.random() * 15000) + 1
        };
      });
      this.peoples = data.results;
      console.log(this.peoples);
    });
  }

}

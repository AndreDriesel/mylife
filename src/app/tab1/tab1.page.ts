import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  loremImgSub: any;
  loremImgs: any;

  constructor(
    public httpClient: HttpClient,
    private navCtrl: NavController
  ) { }

  ionViewWillEnter() {
    this.loadImages();
  }

  loadImages() {
    this.loremImgSub = this.httpClient.get('https://picsum.photos/v2/list?page=2&limit=20');
    this.loremImgSub.subscribe(data => {
      console.log(data);
      data.forEach(element => {
        element.random = Math.floor(Math.random() * 10) + 1 ;
        element.imgPath = 'https://picsum.photos/id/' + element.id + '/100/100';
      });
      this.loremImgs = data;
    });
  }

  nextPage(category: any) {
    console.log(category);
    this.navCtrl.navigateForward('/tabs/tab1/category', category);
  }

}

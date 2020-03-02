import { Component } from '@angular/core';

import { NavController, NavParams } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: 'category.page.html',
  styleUrls: ['category.page.scss']
})
export class CategoryPage {
  loremImgSub: any;
  loremImgs: any;

  constructor(
    public httpClient: HttpClient,
    private navController: NavController,
    private navParams: NavParams
  ) { }

  ionViewWillEnter() {
    this.loadImages();
    const category = this.navParams.get('category');
    console.log(category);
  }

  loadImages() {
    this.loremImgSub = this.httpClient.get('https://picsum.photos/v2/list?page=2&limit=20');
    this.loremImgSub.subscribe(data => {
      console.log(data);
      data.forEach(element => {
        element.random = Math.floor(Math.random() * 10) + 1 ;
        element.imgPath = 'https://picsum.photos/id/' + element.id + '/200/200';
      });
      this.loremImgs = data;
    });
  }

}

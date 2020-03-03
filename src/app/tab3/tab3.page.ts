import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
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
      });
      this.peoples = data.results;
      console.log(this.peoples);
    });
  }

}

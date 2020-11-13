import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images: any = [];

  url = "https://picsum.photos/v2/list";
  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise()
    .then(res => {
      console.log(res);
      this.images = res;

      console.log(this.images);

    })
    .catch((err) => {
      console.log(err);
    });

  }

  currentPage = 0;
  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }

}

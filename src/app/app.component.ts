import { Component } from '@angular/core';

import { Type } from '@angular/compiler';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Goldi';
  randomBeer = [];
  beerOTD = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Type[]>(`http://localhost:8000/beer/random/`)
      .subscribe((res: any) => {
        this.beerOTD = res;
        console.log('botd', this.beerOTD);
      });
  }
  getRandomBeer(): any {
    this.http
      .get<Type[]>(`http://localhost:8000/beer/random/`)
      .subscribe((res: any) => {
        console.log('response from the api', res);
        this.randomBeer = res;
        console.log('work', this.randomBeer);
      });
  }
}

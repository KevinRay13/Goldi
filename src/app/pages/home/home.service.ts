import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Type } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  randomBeer: Type[];

  constructor(private http: HttpClient) {}

  getRandomBeer(): any {
    this.http
      .get<Type[]>(`http://localhost:8000/beer/random/`)
      .subscribe(items => {
        console.log('response from the api', items);
        this.randomBeer = items;
        console.log('work', this.randomBeer);
      });
  }
}

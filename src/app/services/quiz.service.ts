import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      {
        id: 'data/javascript.json',
        name: 'JavaScript',
        description:
          " Hey do you think you are good in JavaScript...?If you think so, check your JavaScript knowledge by taking this test..... ",
        imageUrl: 'assets/images/js.png',
      },
      
    ];
  }
}

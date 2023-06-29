import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = 'b0a2ee30fed9456f8dcdbcbfbcebe191'; // Replace with your NewsAPI API key

  constructor(private http: HttpClient) { }

  getFootballNews() {
    const url = `https://newsapi.org/v2/top-headlines?category=sports&q=football&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
  
  getBasketballNews() {
    const url = `https://newsapi.org/v2/top-headlines?category=sports&q=basketball&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }
}

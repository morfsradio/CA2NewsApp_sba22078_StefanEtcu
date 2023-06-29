import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-basketball',
  templateUrl: './basketball.page.html',
  styleUrls: ['./basketball.page.scss'],
})
export class BasketballPage implements OnInit {
  basketballNews: any;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadBasketballNews();
  }

  loadBasketballNews() {
    this.newsService.getBasketballNews().subscribe((data: any) => {
      this.basketballNews = data.articles;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-football',
  templateUrl: './football.page.html',
  styleUrls: ['./football.page.scss'],
})
export class FootballPage implements OnInit {
  footballNews: any;

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.loadFootballNews();
  }

  loadFootballNews() {
    this.newsService.getFootballNews().subscribe((data: any) => {
      this.footballNews = data.articles;
    });
  }
}


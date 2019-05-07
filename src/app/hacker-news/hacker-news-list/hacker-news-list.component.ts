import { Component, OnInit, ElementRef } from '@angular/core';
import { HackerNewsService } from '../shared/hacker-news.service';
import { debounceTime } from 'rxjs/operators';
import { HackerNewsListService } from './hacker-news-list.service';

@Component({
  selector: 'app-hacker-news-list',
  templateUrl: './hacker-news-list.component.html',
  styleUrls: ['./hacker-news-list.component.css']
})
export class HackerNewsListComponent implements OnInit {
  public items: any;
  public searchQuery: string = '';
  constructor(
    private hackerNewsService: HackerNewsService,
    private  hackerNewsListService: HackerNewsListService
  ) { }

  ngOnInit() {
    const page = 0;
    this.getStories(page);
  }

  getStories(page? , query?) {
    this.hackerNewsService.getNews(page, query).subscribe(res => {
      this.items = res;
    },
      error => console.log('Error fetching stories', error)
    );
  }

  nextPage() {
    if (this.items.page < this.items.nbPages) {
      const nextPage = this.hackerNewsListService.getNextPage(this.items.page);
      this.getStories(nextPage);
    }
  }

  previousPage() {
    if (this.items.page > 0) {
      const previousPage = this.hackerNewsListService.getPreviousPage(this.items.page);
      this.getStories(previousPage);
    }
  }

  OnSearch() {
    const page = 0;
    this.getStories(page, this.searchQuery);
  }


}

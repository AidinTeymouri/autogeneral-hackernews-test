import { Component, OnInit, ElementRef } from '@angular/core';
import { HackerNewsService } from '../shared/hacker-news.service';
import { debounceTime } from 'rxjs/operators';

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
  ) { }

  ngOnInit() {
    let page = 0;
    this.getStories(page);

  }

  getStories(page? , query?) {
    this.hackerNewsService.getNews(page, query).subscribe(res => {
      this.items = res;
      console.log('this.items: ', res);
    },
      error => console.log('Error fetching stories', error)
    );
  }

  nextPage() {
    let nextPage = this.getNextPage(this.items.page);
    this.getStories(nextPage);
  }

  getNextPage(page) {
    page += 1;
    console.log(page);
    return page;
  }

  OnSearch() {
    console.log(this.searchQuery);
    let page = 0;
    this.getStories(page, this.searchQuery);
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsListService {

  constructor() { }

  getNextPage(page) {
    page += 1;
    return page;
  }

  getPreviousPage(page) {
    page -= 1;
    return page;
  }
}

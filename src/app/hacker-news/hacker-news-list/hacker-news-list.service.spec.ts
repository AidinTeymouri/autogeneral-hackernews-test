import { TestBed } from '@angular/core/testing';

import { HackerNewsListService } from './hacker-news-list.service';

describe('HackerNewsListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HackerNewsListService = TestBed.get(HackerNewsListService);
    expect(service).toBeTruthy();
  });
});

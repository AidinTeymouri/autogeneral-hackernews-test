import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = 'http://hn.algolia.com/api/v1/search?tags=story';
   }

   getNews(page?: number, query?: string) {
    let params = new HttpParams()
    params = params.append('hitsPerPage', '10');
    params = params.append('page', page.toString());
    params = params.append('query', query);
    return this.http.get(`${this.baseUrl}`, { params: params });
  }
}

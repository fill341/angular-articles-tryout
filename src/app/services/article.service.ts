import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Article} from '../models/article';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'//, 'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get('http://localhost:8080/api/articles');
  }

  createArticle(article: Article) {
    return this.http.post<Article>('http://localhost:8080/api/articles', article, httpOptions);
  }
}


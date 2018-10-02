import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Article} from '../models/article';

const host = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get(`${host}/api/articles`, httpOptions);
  }

  createArticle(article: Article) {
    return this.http.post<Article>(`${host}/api/articles`, article, httpOptions);
  }

  removeArticle(article: Article) {
    return this.http.delete(`${host}/api/articles/${article.id}`, httpOptions);
  }
}


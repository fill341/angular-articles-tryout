import { Injectable } from '@angular/core';
import {Post} from '../models/post';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}
  getLastPosts() {
    return this.http.get('http://localhost:8080/posts/lasts');
  }
}


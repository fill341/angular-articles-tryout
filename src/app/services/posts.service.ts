import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Post} from '../models/post';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}
  getLastPosts() {
    return this.http.get('http://localhost:8080/posts/lasts');
  }

  addPost(post: Post) {
    return this.http.post<Post>('http://localhost:8080/posts', post, httpOptions);
  }
}


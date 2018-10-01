import { Injectable } from '@angular/core';
import {Post} from '../models/post';

@Injectable()
export class PostsService {
  private posts: Post[];
  constructor() {}
  getLastPosts(): Post[] {
    this.posts = [];
    this.posts.push({
      title: 'title',
      briefly: 'briefly',
      id: '1'
    });
    return this.posts;
  }
}


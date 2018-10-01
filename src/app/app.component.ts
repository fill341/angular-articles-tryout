import { Component } from '@angular/core';
import {PostsService} from './services/posts.service';
import {Post} from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostsService]
})
export class AppComponent {

  private posts;

  constructor (private postsService: PostsService) {
    this.postsService.getLastPosts().subscribe((data: Post) => {
      this.posts = data;
    });
  }

  get list(): Post[] {
    return this.posts;
  }
}

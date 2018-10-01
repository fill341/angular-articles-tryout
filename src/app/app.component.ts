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
    this.postsService.getLastPosts().subscribe((posts: Post) => {
      this.posts = posts;
    });
  }

  get list(): Post[] {
    return this.posts;
  }

  addPost(post: Post) {
    this.postsService.addPost(post).subscribe((item: Post) => {
      this.posts.push(item);
    });
  }
}

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

  constructor (private postsService: PostsService) {}

  get list(): Post[] {
    return this.postsService.getLastPosts();
  }
}

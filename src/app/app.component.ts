import { Component } from '@angular/core';
import {ArticleService} from './services/article.service';
import {Article} from './models/article';
import {MatDialog} from '@angular/material';
import {AddArticleDialogComponent} from './forms/add-article-dialog/add-article-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleService]
})
export class AppComponent {

  private posts;

  constructor (private postsService: ArticleService, public dialog: MatDialog) {
    this.postsService.getAll().subscribe((posts: Article) => {
      this.posts = posts;
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddArticleDialogComponent, {
      width: '50%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  get list(): Article[] {
    return this.posts;
  }

  addPost(post: Article) {
    this.postsService.createArticle(post).subscribe((item: Article) => {
      this.posts.push(item);
    });
  }
}

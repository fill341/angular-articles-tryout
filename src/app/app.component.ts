import { Component } from '@angular/core';
import {ArticleService} from './services/article.service';
import {Article} from './models/article';
import {MatDialog} from '@angular/material';
import {AddArticleDialogComponent} from './forms/add-article-dialog/add-article-dialog.component';
import {ConfirmDialogComponent} from './forms/confirm-dialog/confirm-dialog.component';
import {a} from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleService]
})
export class AppComponent {

  private posts;

  constructor (private articleService: ArticleService, public dialog: MatDialog) {
    this.updateArticles();
  }
  openCreateArticleDialog(): void {
    const dialogRef = this.dialog.open(AddArticleDialogComponent, {
      width: '50%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(formResult => {
      this.addPost(formResult);
    });
  }

  openRemoveArticleDialog(article: Article) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '15%',
      data: {
        title: 'Remove article'
      }
    });

    dialogRef.afterClosed().subscribe(formResult => {
      if (formResult === true) {
        this.removeArticle(article);
      }
    });
  }

  get list(): Article[] {
    return this.posts;
  }

  addPost(post: Article) {
    this.articleService.createArticle(post).subscribe((item: Article) => {
      this.articleService.createArticle(item);
      this.updateArticles();
    });
  }

  updateArticles(): void {
    this.articleService.getAll().subscribe((posts: Article) => {
      this.posts = posts;
    });
  }

  removeArticle(article): void {
    this.articleService.removeArticle(article).subscribe(() => {
      this.updateArticles();
    });
  }
}

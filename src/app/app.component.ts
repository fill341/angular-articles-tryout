import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ArticleService} from './services/article.service';
import {Article} from './models/article';
import {MatDialog} from '@angular/material';
import {AddArticleDialogComponent} from './forms/add-article-dialog/add-article-dialog.component';
import {ConfirmDialogComponent} from './forms/confirm-dialog/confirm-dialog.component';
import {ArticleGridComponent} from './components/article-grid/article-grid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ArticleService]
})
export class AppComponent {

  @ViewChild(ArticleGridComponent) articleGrid;

  constructor (private articleService: ArticleService, public dialog: MatDialog) {}

  openCreateArticleDialog(): void {
    const dialogRef = this.dialog.open(AddArticleDialogComponent, {
      width: '50%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(formResult => {
      this.addPost(formResult);
    });
  }

  addPost(post: Article) {
    this.articleService.createArticle(post).subscribe((item: Article) => {
      this.articleService.createArticle(item);
      this.articleGrid.loadArticles();
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';
import {ConfirmDialogComponent} from '../../forms/confirm-dialog/confirm-dialog.component';
import {ArticleService} from '../../services/article.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-article-grid',
  templateUrl: './article-grid.component.html',
  styleUrls: ['./article-grid.component.css']
})
export class ArticleGridComponent implements OnInit {

  private posts;
  public breakpoint;

  constructor(private articleService: ArticleService, public dialog: MatDialog) {
    this.updateArticles();
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
  }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
  }

  get list(): Article[] {
    return this.posts;
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
}

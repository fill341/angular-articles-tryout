import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Article} from '../../models/article';
import {ConfirmDialogComponent} from '../../forms/confirm-dialog/confirm-dialog.component';
import {ArticleService} from '../../services/article.service';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-grid-cell-component',
  styleUrls: ['./grid-cell.component.css'],
  template: `
    <mat-grid-tile-header>
      <span>{{article.title}}</span>
      <span class="example-fill-remaining-space"></span>
      <span>
        <button mat-button color="primary" (click)="openRemoveArticleDialog(article)">remove</button>
      </span>
    </mat-grid-tile-header>
    {{article.briefly}}
  `
})
export class GridCellComponent {

  @Input() article: Article;
  @Output() articledRemoved = new EventEmitter<string>();

  constructor(private articleService: ArticleService, public dialog: MatDialog) {}

  removeArticle(article): void {
    this.articleService.removeArticle(article).subscribe(() => {
      this.articledRemoved.emit(article.id);
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

import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article.service';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../../forms/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-article-grid',
  template: `
    <mat-card>
      <mat-grid-list [cols]="breakpoint" rowHeight="1:1" (window:resize)="onResize($event)" gutterSize="5em">
        <mat-grid-tile class="tile__item" *ngFor="let article of list" >
          <mat-grid-tile-header>
            <span>{{article.title}}</span>
            <span class="example-fill-remaining-space"></span>
            <span>
              <button mat-button (click)="openRemoveArticleDialog(article)">remove</button>
            </span>
          </mat-grid-tile-header>
          {{article.briefly}}
        </mat-grid-tile>
      </mat-grid-list>
    </mat-card>
  `,
  styleUrls: ['./article-grid.component.css']
})
export class ArticleGridComponent implements OnInit {

  private posts;
  public breakpoint;

  constructor(private articleService: ArticleService, public dialog: MatDialog) {
    this.updateArticles();
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
}

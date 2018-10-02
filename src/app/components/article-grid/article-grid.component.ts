import {Component, OnInit} from '@angular/core';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article.service';

@Component({
  selector: 'app-article-grid',
  template: `
    <mat-card>
      <mat-grid-list [cols]="breakpoint" rowHeight="1:1" (window:resize)="onResize($event)" gutterSize="5em">
        <mat-grid-tile class="tile__item" *ngFor="let article of list" >
          <app-grid-cell-component [article]="article" (articledRemoved)="loadArticles()"></app-grid-cell-component>
        </mat-grid-tile>
      </mat-grid-list>
    </mat-card>
  `,
  styleUrls: ['./article-grid.component.css']
})
export class ArticleGridComponent implements OnInit {

  private articles;
  public breakpoint;

  constructor(private articleService: ArticleService) {
    this.loadArticles();
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 4;
  }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 4;
  }

  get list(): Article[] {
    return this.articles;
  }

  loadArticles(): void {
    this.articleService.getAll().subscribe((posts: Article) => {
      this.articles = posts;
    });
  }
}

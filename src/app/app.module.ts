import { BrowserModule } from '@angular/platform-browser';
import {
  MatGridListModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatFormFieldModule,
  MatDialogModule, MatInputModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AddArticleDialogComponent } from './forms/add-article-dialog/add-article-dialog.component';
import { ConfirmDialogComponent } from './forms/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AddArticleDialogComponent,
    ConfirmDialogComponent
  ],
  entryComponents: [
    AddArticleDialogComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule, ReactiveFormsModule,
    MatGridListModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatFormFieldModule,
    MatDialogModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

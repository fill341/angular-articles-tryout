import { BrowserModule } from '@angular/platform-browser';
import {
  MatGridListModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatFormFieldModule,
  MatDialogModule
} from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AddArticleModalDialog } from './forms/add-article-modal-dialog/add-article-modal-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AddArticleModalDialog
  ],
  entryComponents: [
    AddArticleModalDialog
  ],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule,
    MatGridListModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatFormFieldModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

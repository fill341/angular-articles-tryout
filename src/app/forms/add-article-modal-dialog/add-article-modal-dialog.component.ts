import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-add-article-form',
  templateUrl: './add-article-modal-dialog.component.html',
  styleUrls: ['./add-article-modal-dialog.component.css']
})
export class AddArticleModalDialogComponent {

  constructor(public dialogRef: MatDialogRef<AddArticleModalDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

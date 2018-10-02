import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-article-form',
  templateUrl: './add-article-dialog.component.html',
  styleUrls: ['./add-article-dialog.component.css']
})
export class AddArticleDialogComponent {

  public articleForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddArticleDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, formBuilder: FormBuilder) {
    this.articleForm = formBuilder.group({
      'title': ['', Validators.compose([Validators.required])],
      'briefly': ['', Validators.compose([Validators.required])],
      'description': ['', Validators.compose([Validators.required])],
      'releaseDate': [new Date(), Validators.compose([Validators.required])]
    });
  }

  handleCreateClick(): void {
    this.dialogRef.close(this.articleForm.value);
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticleModalDialogComponent } from './add-article-modal-dialog.component';

describe('AddArticleModalDialogComponent', () => {
  let component: AddArticleModalDialogComponent;
  let fixture: ComponentFixture<AddArticleModalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddArticleModalDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArticleModalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

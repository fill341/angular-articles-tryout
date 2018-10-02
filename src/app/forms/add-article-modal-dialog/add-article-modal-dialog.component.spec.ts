import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticleModalDialog } from './add-article-modal-dialog.component';

describe('AddArticleModalDialog', () => {
  let component: AddArticleModalDialog;
  let fixture: ComponentFixture<AddArticleModalDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddArticleModalDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArticleModalDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

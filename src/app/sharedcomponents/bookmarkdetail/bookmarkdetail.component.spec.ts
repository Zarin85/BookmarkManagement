import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkdetailComponent } from './bookmarkdetail.component';

describe('BookmarkdetailComponent', () => {
  let component: BookmarkdetailComponent;
  let fixture: ComponentFixture<BookmarkdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbookmarkComponent } from './newbookmark.component';

describe('NewbookmarkComponent', () => {
  let component: NewbookmarkComponent;
  let fixture: ComponentFixture<NewbookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewbookmarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewbookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

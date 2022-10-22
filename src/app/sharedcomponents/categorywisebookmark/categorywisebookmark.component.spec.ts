import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorywisebookmarkComponent } from './categorywisebookmark.component';

describe('CategorywisebookmarkComponent', () => {
  let component: CategorywisebookmarkComponent;
  let fixture: ComponentFixture<CategorywisebookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorywisebookmarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorywisebookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

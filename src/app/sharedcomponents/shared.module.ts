import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';

import { CategorywisebookmarkComponent } from './categorywisebookmark/categorywisebookmark.component';
import { BookmarkdetailComponent } from './bookmarkdetail/bookmarkdetail.component';


@NgModule({
  declarations: [
  
    CategorywisebookmarkComponent,
        BookmarkdetailComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatDividerModule,
    MatProgressBarModule,
  ],
  exports:[CategorywisebookmarkComponent, BookmarkdetailComponent]
})
export class SharedModule { }

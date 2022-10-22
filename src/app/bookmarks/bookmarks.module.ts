import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
 
import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { BookmarksComponent } from './bookmarks.component';
import { NewbookmarkComponent } from './newbookmark/newbookmark.component';
import { SharedModule } from '../sharedcomponents/shared.module';


@NgModule({
  declarations: [
    BookmarksComponent,
    NewbookmarkComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    SharedModule,
    MatToolbarModule,
    BookmarksRoutingModule
  ]
})
export class BookmarksModule { }

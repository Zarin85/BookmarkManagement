import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NewbookmarkComponent } from './bookmarks/newbookmark/newbookmark.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router,
    private dialog: MatDialog)
  {
    this.router.navigate(['bookmarks']);
  }

  addBookmark()
  {
    let dialogRef = this.dialog.open(NewbookmarkComponent, {
      height: '50%',
      width: '50%',
    });
  }
}

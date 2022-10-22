import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Bookmark } from 'src/app/Model/bookmark.model';
import { Category } from 'src/app/Model/category.model';
import { Categorywisebookmark } from 'src/app/Model/categorywisebookmark.model';
import { TempDataService } from 'src/services/tempdata/tempdata.service';

@Component({
  selector: 'app-categorywisebookmark',
  templateUrl: './categorywisebookmark.component.html',
  styleUrls: ['./categorywisebookmark.component.css']
})
export class CategorywisebookmarkComponent implements OnInit {

 @Input() bookmarkByCategory:Bookmark[]=[];
 @Output() getDetails: EventEmitter<any>=new EventEmitter; 
 bookmarks: Bookmark[]=[];
  constructor(private service: TempDataService) { }

  ngOnInit(): void {
    this.bookmarkByCategory?.forEach(x=>
      {
        this.bookmarks.push(x);
      });
      
  }
  
  getDetail(bookmark:any)
  {
    this.getDetails.emit(bookmark);
  }

}

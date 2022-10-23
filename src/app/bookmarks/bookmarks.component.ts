import { Component, OnInit } from '@angular/core';
import { TempDataService } from 'src/services/tempdata/tempdata.service';
import { Bookmark } from '../Model/bookmark.model';
import { Category } from '../Model/category.model';
import { Categorywisebookmark } from '../Model/categorywisebookmark.model';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  bookmarkByCategory:Categorywisebookmark[]=[];
  bookmarks: Bookmark[]=[];
  categories: Category[]=[];
  isDetail:boolean=false;
  title:string="";
  url:string="";
  categoryId:string='';
  constructor(private service: TempDataService) { }

  ngOnInit(): void {
    this.loadCategories();
    this.loadBookmarks();
    this.loadCategoryWiseBookMark();
  }

  loadCategories()
  {
    this.categories = this.service.getData("category");
  }

  loadBookmarks()
  {
    this.bookmarks = this.service.getData("bookmarks");

    this.bookmarks.forEach((x)=>
      {
        this.categories.forEach(y=>
          {
            if(x.categoryId == y.categoryId)
            {
              let index = this.bookmarkByCategory.findIndex(z=>z.categoryId == x.categoryId);
              if(index>=0)
              {
                this.bookmarkByCategory[index].data.push(x);
                this.service.setData("categorywiseBookmark", this.bookmarkByCategory);
              }
              else
              {
                let data=[];
                data.push(x);
                let obj = 
                {
                  categoryId: x.categoryId,
                  categoryName: x.categoryName,
                  data: data
                }
                this.bookmarkByCategory.push(obj);
                this.service.setData("categorywiseBookmark", this.bookmarkByCategory);

              }
            }
          });
      });
  }

  loadCategoryWiseBookMark()
  {
    this.bookmarkByCategory = this.service.getData("categorywiseBookmark");
  }

  getDetails(bookmark:any)
  {
this.isDetail =true;
    this.title=bookmark.title;
    this.url=bookmark.url;
    this.categoryId=bookmark.categoryName;
  }
}

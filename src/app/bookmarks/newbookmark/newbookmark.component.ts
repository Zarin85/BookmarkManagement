import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Bookmark } from 'src/app/Model/bookmark.model';
import { Category } from 'src/app/Model/category.model';
import { TempDataService } from 'src/services/tempdata/tempdata.service';

@Component({
  selector: 'app-newbookmark',
  templateUrl: './newbookmark.component.html',
  styleUrls: ['./newbookmark.component.css']
})
export class NewbookmarkComponent implements OnInit {

  bookmarkForm!: FormGroup;
  submitted: boolean = false;
  isNewCategory: boolean = false;
  categories: Category[] = [];
  categoryId: number = 1;
  bookmarks: Bookmark[] = [];
  constructor(public dialogRef: MatDialogRef<NewbookmarkComponent>,
    private service: TempDataService,
    public formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.bookmarkForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        url: ['', Validators.required],
        category: [{ value: null, disabled: false }],
        categoryName: ['']
      });
      this.loadCategories();
      this.loadBookmarks();
  }

  loadCategories()
  {
    this.categories = this.service.getData("category") || [];
  }

  loadBookmarks()
  {
    this.bookmarks = this.service.getData("bookmarks") || [];
  }

  //convenience getter for easy access to form fields
  get f() { return this.bookmarkForm.controls; }

  categoryChanged(event:any)
  {
    this.categoryId = event.value;
  }
  addCategory() {
    this.isNewCategory = true;
    this.f['category'].disable();
    if (this.categories != null && this.categories.length > 0) {
      let category = this.categories.pop();
      let categoryId = category?.categoryId;
      this.categories.push(category!);
      this.categoryId = categoryId! + 1;

    }
    else {
      this.categoryId = 1;
    }
  }
  onSave() {
    if (this.bookmarkForm.invalid) {
      return;
    }

    if (!this.isNewCategory && this.f['category'].value == undefined) {
      alert("Please Select Category!!");
      return;
    }
    else if(this.isNewCategory == false && this.f['categoryName'].value == undefined)
    {
      alert("Please Select Category Name!!");
      return;
    }
    if(this.isNewCategory == false)
    {
      this.categoryId = this.f['category'].value;
    }
    else
    {
      const obj =
      {
        categoryId: this.categoryId,
        categoryName: this.f['categoryName'].value
      }
      this.categories.push(obj);
      this.service.setData("category", this.categories);
    }
   
    const bookmark =
      {
        title: this.f['title'].value,
        url: this.f['title'].value,
        categoryId: this.categoryId,
        categoryName: this.f['categoryName'].value == "" ? this.categories.find(x=> x.categoryId == this.categoryId)?.categoryName :this.f['categoryName'].value 
      }
      this.bookmarks.push(bookmark);
      
      this.service.setData("bookmarks", this.bookmarks);


      this.bookmarkForm.patchValue({
        title:'',
        url:'',
        category:{value:null},
        categoryName:''
      });
      this.isNewCategory = false;
      this.f['category'].enable();
  }

  onClose() {
    this.dialogRef.close();
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmarkdetail',
  templateUrl: './bookmarkdetail.component.html',
  styleUrls: ['./bookmarkdetail.component.css']
})
export class BookmarkdetailComponent implements OnInit {

  @Input() title:string='';
  @Input() url:string='';
  @Input() categoryId:string='';
  @Input() isDetail: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}

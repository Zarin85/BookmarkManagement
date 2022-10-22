import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Api } from './api/api';
import { AuthorService } from './author/author.service';
import { TempDataService } from './tempdata/tempdata.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[Api, AuthorService, TempDataService]
})
export class ServicesModule { }

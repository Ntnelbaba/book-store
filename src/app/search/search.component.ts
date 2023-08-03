import { Component, Input, Output, EventEmitter  } from '@angular/core';
import {BooksService} from '../books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {
 
  constructor(private booksService: BooksService) {}


  search(value: string) {
    if (value) {
     
      console.log("Searching for book about (or written by)", value);
      void this.booksService.searchForBooks(value);
    }
  }
}

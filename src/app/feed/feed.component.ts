import { Component, inject } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  booksService = inject(BooksService);
  booksList = this.booksService.booksList;
}

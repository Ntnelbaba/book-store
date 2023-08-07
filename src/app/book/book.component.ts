import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() book?: Book;
  @Input() buttonText?: string;
  @Input() buttonColor = 'grey';
  @Output() buttonClicked = new EventEmitter<Book>();
}

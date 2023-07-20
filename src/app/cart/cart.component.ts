import { Component, inject } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  booksService = inject(BooksService);
  cart = this.booksService.cart;
}

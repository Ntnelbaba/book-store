import { Component, inject } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  booksService = inject(BooksService);
  cartData = [...this.booksService.cart.values()];
  displayedColumns: string[] = ['title', 'count', 'cost'];

  getTotalCost() {
    return this.cartData
      .map((cartItem) => cartItem.cost)
      .reduce((acc, value) => acc + value, 0);
  }

  getTotalCount() {
    return this.cartData
      .map((cartItem) => cartItem.count)
      .reduce((acc, value) => acc + value, 0);
  }
}

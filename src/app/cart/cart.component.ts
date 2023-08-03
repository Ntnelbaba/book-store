import { Component, inject } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  // @HostBinding lets you set properties on the element or component that hosts the directive
  // see answer 5 in: https://stackoverflow.com/questions/34645315/how-to-apply-css-class-to-a-component-element-when-its-created-by-router-outlet
  // and https://www.digitalocean.com/community/tutorials/angular-hostbinding-hostlistener
  booksService = inject(BooksService);
  cart = this.booksService.cart;
}

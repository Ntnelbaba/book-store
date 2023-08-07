import { Injectable, OnInit } from '@angular/core';

export interface Book {
  id: number;
  title: string;
  src: string;
  alt: string;
  desc: string;
  cost: number;
}

export interface CartItem {
  count: number;
  cost: number;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class BooksService implements OnInit {
  books: Book[] = [
    {
      id: 1,
      title: 'Book 1',
      src: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?w=2000&t=st=1689774536~exp=1689775136~hmac=bff927af8b79ea7bf71c6a9a6a1e848888b46f52d8e61b034fd1d8e9d27ec900',
      alt: 'Book 1',
      desc: 'My first book',
      cost: 10,
    },
  ];
  cart: Map<number, CartItem> = new Map<number, CartItem>();

  ngOnInit(): void {
    const cart = localStorage.getItem('cart');
    if (cart) {
      this.cart = JSON.parse(cart);
    }
  }

  addToCart(book: Book) {
    const cartItemForBook = this.cart.get(book.id);
    const bookCount = cartItemForBook?.count ? cartItemForBook.count + 1 : 1;
    this.cart.set(book.id, {
      count: bookCount,
      title: book.title,
      cost: book.cost * bookCount,
    });
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }
}

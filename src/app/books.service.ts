import { Injectable } from '@angular/core';

export interface Book {
  title: string;
  src: string;
  alt: string;
  desc: string;
}

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Book[] = [{
    title: 'Book 1',
    src: 'https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?w=2000&t=st=1689774536~exp=1689775136~hmac=bff927af8b79ea7bf71c6a9a6a1e848888b46f52d8e61b034fd1d8e9d27ec900',
    alt: 'Book 1',
    desc: 'My first book'
  }];
  cart: Book[] = [];
  
  addToCart(book: Book) {
    this.cart.push(book);
  }
}

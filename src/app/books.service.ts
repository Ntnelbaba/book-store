import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, BehaviorSubject } from 'rxjs';

export interface Book {
  title: string;
  authors: string[];
  src: string; // img (thumbnail)
  alt: string;
  desc: string;  //description
  id: string;
  price: number 
}

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  cart: Book[] = [];
  apiSearchUrl = 'https://www.googleapis.com/books/v1/volumes?q=';
  booksList = new BehaviorSubject<Book[]> ([]);

  constructor(private http: HttpClient){};
  
  addToCart(book: Book) {
    this.cart.push(book);
  }

  removeFromCart(book: Book) {

    const cartWithoutBook = this.cart.filter(function (nextBook) {
      return nextBook.id !== book.id;
  });
    
  this.cart = cartWithoutBook;

  }

  async searchForBooks(search: string): Promise<void> {

    
    // we need to clean the contents of the previous search, otherwise the results of the next search get added to the previous search results.
    // see here:
    this.booksList.next([]);

    const requestUrl = this.apiSearchUrl + search;
    console.log("inside search, posting to ", requestUrl, " searching for: ", search);

    // Make the API call and process the response
    const response = await firstValueFrom(this.http.get<any>(requestUrl));

    // Map the API response items to the Book objects with only the required properties
    //and Extract the required properties and add books one by one to the booksList
    response.items.forEach((item: any) => {
      const book: Book = {
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        src: item.volumeInfo.imageLinks?.thumbnail,
        alt: item.volumeInfo.title,
        desc: item.volumeInfo.description,
        id: item.id,
        price: 5
      };
      console.log("Got book item: ", book);
      // Update the booksList using the BehaviorSubject's next method for each book
      this.booksList.next([...this.booksList.getValue(), book]);
     console.log("received data: ", this.booksList.getValue());
    });
  }
}

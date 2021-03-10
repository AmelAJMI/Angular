import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient:HttpClient) { }

  getBooks() {
    return this.httpClient.get ('http://127.0.0.1:8000/api/books');
  }
  addBook(book:any){
    return this.httpClient.post ('http://127.0.0.1:8000/api/books',book);
  }
  deleteBook(id:any){
    return this.httpClient.delete ('http://127.0.0.1:8000/api/books/'+id);
  }
  getBook(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/books/'+id)
  }
  updateBook(id:any,book:any){
    return this.httpClient.put ('http://127.0.0.1:8000/api/books/'+ id,book);
  }
}

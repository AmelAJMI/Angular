import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookTypeService {

  constructor(private httpClient:HttpClient) { }

  getBookTypes() {
    return this.httpClient.get ('http://127.0.0.1:8000/api/book_type');
  }
  addBookType(bookType:any){
    return this.httpClient.post ('http://127.0.0.1:8000/api/book_type',bookType);
  }
  deleteBookType(id:any){
    return this.httpClient.delete ('http://127.0.0.1:8000/api/book_type/'+id);
  }
  getBookType(id:any){
    return this.httpClient.get('http://127.0.0.1:8000/api/book_type/'+id)
  }
  updateBookType(id:any,bookType:any){
    return this.httpClient.put ('http://127.0.0.1:8000/api/book_type/'+ id,bookType);
  }
}

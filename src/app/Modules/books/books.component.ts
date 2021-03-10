import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/book';

import { BooksService } from 'src/app/Shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:any;
  
  constructor(private booksService:BooksService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){
    this.booksService.getBooks().subscribe(res => {
      this.books = res;
    });
  }

  deleteBook(id:any){
    this.booksService.deleteBook(id).subscribe(res =>{
      this.getBooks();
    });

  }

  
  

}

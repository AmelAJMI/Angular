import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/book';
import { BookType } from 'src/app/Models/book-type';
import { BookTypeService } from 'src/app/Shared/book-type.service';
import { BooksService } from 'src/app/Shared/books.service';
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  bookTypes:any;
  book = new Book();
  bookType = new BookType();
  
  
  constructor(private bookTypeService:BookTypeService, private booksService:BooksService) { }

  ngOnInit(): void {
    this.getBookTypes();
  }
  getBookTypes() {
    this.bookTypeService.getBookTypes().subscribe(res => {
      this.bookTypes = res;
    });

}
  addBook(){
    this.booksService.addBook(this.book).subscribe(res => {
     console.log(res);
    
    });
  }


}

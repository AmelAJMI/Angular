import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/book';
import { BookTypeService } from 'src/app/Shared/book-type.service';
import { BooksService } from 'src/app/Shared/books.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  id:any;
  data:any;

  bookTypes:any;
  book = new Book();

  constructor(private bookService:BooksService, private bookTypeService:BookTypeService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;
    this.getBookTypes();
    this.getBook();
  }

  getBookTypes() {
    this.bookTypeService.getBookTypes().subscribe(res => {
      this.bookTypes = res;
   
    });
  }

  getBook() {
    this.bookService.getBook(this.id).subscribe(res => {

      this.data = res
      this.book = this.data;
    });
  }

  updateBook() {
    this.bookService.updateBook(this.id,this.book).subscribe(res => {});
  }

}

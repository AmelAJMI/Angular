import { Component, OnInit } from '@angular/core';
import { BookType } from 'src/app/Models/book-type';
import { BookTypeService } from 'src/app/Shared/book-type.service';

@Component({
  selector: 'app-book-type-add',
  templateUrl: './book-type-add.component.html',
  styleUrls: ['./book-type-add.component.css']
})
export class BookTypeAddComponent implements OnInit {
  bookType = new BookType();
  constructor(private bookTypeService:BookTypeService) { }

  ngOnInit(): void {
  }


  addBookType(){
    this.bookTypeService.addBookType(this.bookType).subscribe(res => {
      console.log(res);
      
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookType } from 'src/app/Models/book-type';
import { BookTypeService } from 'src/app/Shared/book-type.service';

@Component({
  selector: 'app-book-type-edit',
  templateUrl: './book-type-edit.component.html',
  styleUrls: ['./book-type-edit.component.css']
})
export class BookTypeEditComponent implements OnInit {

  id:any;
  data:any;
  bookType = new BookType();

  constructor(private route:ActivatedRoute, private bookTypeService: BookTypeService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;
    this.getBookType();

  }
  getBookType(){
   
    this.bookTypeService.getBookType(this.id).subscribe(res => {
      this.data = res;
      this.bookType = this.data;
     
    });
  }

  updateBookType(){
    this.bookTypeService.updateBookType(this.id,this.bookType).subscribe(res => {});
  }

}

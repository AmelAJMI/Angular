import { Component, OnInit } from '@angular/core';
import { BookTypeService } from 'src/app/Shared/book-type.service';

@Component({
  selector: 'app-book-type',
  templateUrl: './book-type.component.html',
  styleUrls: ['./book-type.component.css']
})
export class BookTypeComponent implements OnInit {
    bookTypes:any;
  constructor(private bookTypeService:BookTypeService) { }

  ngOnInit(): void {
    this.getBookTypes();
  }
  getBookTypes(){
    this.bookTypeService.getBookTypes().subscribe(res => {
      this.bookTypes = res;
    });
  }
  deleteBookType(id:any){
    this.bookTypeService.deleteBookType(id).subscribe(res =>{
      this.getBookTypes();
    });

  }

}

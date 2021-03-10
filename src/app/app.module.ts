import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './Modules/books/books.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { BookAddComponent } from './Modules/book-add/book-add.component';
import { BookTypeComponent } from './Modules/book-type/book-type.component';
import {FormsModule} from '@angular/forms';
import { BookEditComponent } from './Modules/book-edit/book-edit.component';
import { NavbarComponent } from './Modules/navbar/navbar.component';
import { BookTypeAddComponent } from './Modules/book-type-add/book-type-add.component'
import { BookTypeEditComponent } from './Modules/book-type-edit/book-type-edit.component';


const appRoutes : Routes = [
  {path: '', component:BooksComponent},
  {path: 'bookTypes',component:BookTypeComponent},
  {path: 'add-book', component:BookAddComponent},
  {path:'add-bookType',component:BookTypeAddComponent},
  {path: 'edit-book/:id', component:BookEditComponent},
  {path: 'edit-bookType/:id', component:BookTypeEditComponent}
  

];

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookAddComponent,
    BookTypeComponent,
    BookEditComponent,
    NavbarComponent,
    BookTypeAddComponent,
    BookTypeEditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

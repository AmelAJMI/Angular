import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTypeEditComponent } from './book-type-edit.component';

describe('BookTypeEditComponent', () => {
  let component: BookTypeEditComponent;
  let fixture: ComponentFixture<BookTypeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookTypeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

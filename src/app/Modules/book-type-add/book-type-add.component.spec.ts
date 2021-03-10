import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTypeAddComponent } from './book-type-add.component';

describe('BookTypeAddComponent', () => {
  let component: BookTypeAddComponent;
  let fixture: ComponentFixture<BookTypeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookTypeAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

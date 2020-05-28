import { Component, OnInit } from '@angular/core';
import books from '../../assets/books.json';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books = books;

  searchText:string;

  constructor() { 
    console.log(books);
  }

  ngOnInit(): void {
  }

    
 
}

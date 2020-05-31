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

  config: any;

  constructor() { 
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.books.length
    };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }



  ngOnInit(): void {
  }

    
 
}

import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/shared/author.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {


  model:Author;

  authors:Author[] = [
    {
      "name":"Rithik","email":"rithik.p@gmail.com",books:5
    },
    {
      "name":"Anvesh","email":"anvesh.c@gmail.com",books:10
    },
    {
      "name":"Yuvraj","email":"yuvraj.d@gmail.com",books:7
    }
  ]


 
  constructor() { 

  }

  ngOnInit(): void {
    
    console.log(this.model);
    
  }

  deleteAuthor(author: Author){
    let index = this.authors.indexOf(author);
    this.authors.splice(index,1);
  }

  submitData(f){

    this.model = f.value;
    this.authors.push(this.model);    
        
  }

  editAuthor(author:Author){
     let index = this.authors.indexOf(author);
     this.model = author;    
    this.authors[index]= this.model;
  }

 
}

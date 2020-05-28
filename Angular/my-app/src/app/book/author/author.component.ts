import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/shared/author.model';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  author:Author={
    "name":"",
    "email":"",
    "books":0
  }

  authors:Author[] = [
    {
      "name":"Rithik","email":"rithik.p@gmail.com","books":5
    },
    {
      "name":"Anvesh","email":"anvesh.c@gmail.com","books":10
    },
    {
      "name":"Yuvraj","email":"yuvraj.d@gmail.com","books":7
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  deleteAuthor(author: Author){
    let index = this.authors.indexOf(author);
    this.authors.splice(index,1);
  }

  submitData(f){
    
    console.log(f);
    console.log(this.author);
    this.authors.push(this.author);
    f.reset();
    
  }
}

import { Component, OnInit } from '@angular/core';
import { IplService } from '../ipl.service';
import { login } from 'src/app/shared/login.model';
import { RouterLink, RouterEvent, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:login;

  constructor(private iplService:IplService, public router:Router) { }

  ngOnInit(): void {
  }

  submitData(f) {

    this.model = f.value;

    if (this.model.username == "") {
      alert("Name must be filled out");
      return false;
    }

    if (this.model.password == "") {
      alert("Password must be filled out");
      return false;
    }


    this.iplService.setbody(this.model);

    if((this.model.password!=="admin")||(this.model.username!=="admin@gmail.com")){
      f.reset();
      alert("Please enter correct credentials");
      return false;
    }
    
    this.iplService.getToken().subscribe(res => {
      localStorage.setItem("token", res["token"]);

     //  this.iplService.header.set('Authorization',"Bearer " + this.token,);
      // this.iplService.header.set('Access-Control-Allow-Origin', '*')
    })

    f.reset();
    this.router.navigate(['ipl/iplhome']);  

  }
}

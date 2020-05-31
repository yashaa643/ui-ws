import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Team} from '../shared/team.model'
import { login } from '../shared/login.model';
import { Player } from '../shared/player.model';

@Injectable({
  providedIn: 'root'
})
export class IplService {
 
  my_auth_token:string;

  loginheaders = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      
    })
  };
  header = new HttpHeaders({
    'Authorization': "Bearer "+localStorage.getItem("token")
  })

  private httpOptions = {
    headers: this.header,
  };

  private body = {
    "password": "string",
    "username": "string"
  }

  public setbody(val:login){
    this.body = val;
  }

  constructor(private http:HttpClient) { }

  
  teamDetails():Observable<Team[]>{
    console.log(this.header);
    return this.http.get<Team[]>("https://indipl2020.herokuapp.com/ipl2020/team/all",this.httpOptions);
  }

  getToken():Observable<string>{
    console.log(this.body)
    return this.http.post<string>("https://indipl2020.herokuapp.com/authenticate",this.body,this.loginheaders);
  }

  playerDetails():Observable<Player[]>{
    return this.http.get<Player[]>("https://indipl2020.herokuapp.com/ipl2020/team/players/all",this.httpOptions);  
  }

}
 
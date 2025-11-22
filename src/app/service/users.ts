import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class Users {
  constructor(private http:HttpClient){

  }

  getUsers():Observable<User[]>{
    const url="http://localhost:3000/users";
    return this.http.get<User[]>(url);
  }

  saveUsers(user:User):Observable<User>{
  const url="http://localhost:3000/users";
  return this.http.post<User>(url,user);
  }

  deleteUsers(id:string):Observable<User>{
    const url="http://localhost:3000/users";
    return this.http.delete<User>(url + "/" + id);
  }

  updateUsers(id:string):Observable<User>{
    const url="http://localhost:3000/users";
    return this.http.get<User>(url + "/" + id);
  }

  upUsers(user:User):Observable<User>{
    const url="http://localhost:3000/users";
    return this.http.put<User>(url + "/" +user.id,user);
  }
}

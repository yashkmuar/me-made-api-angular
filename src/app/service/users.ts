import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Users {
  constructor(private http:HttpClient){

  }

  getUsers():Observable<Users[]>{
    const url="http://localhost:3000/users"
    return this.http.get<Users[]>(url);
  }
}

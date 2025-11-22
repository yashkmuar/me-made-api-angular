import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users } from './service/users';
import { User } from './interfaces/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('jsonserver-api-angular');
  users:User[]=[];
  constructor(private userService:Users){

  }
  ngOnInit(){
    this.getUser();
  }

  getUser(){
    this.userService.getUsers().subscribe((data:User[]) => {
      this.users=data;
      console.log(this.users);
    });
  }

  addUser(user:User){
    this.userService.saveUsers(user).subscribe((data:User) => {
      if(data){
        this.getUser();
      }
      console.log(data);
    })
  }

  deleteUser(id:string){
    this.userService.deleteUsers(id).subscribe((data:User) => {
      console.log(data);
    })
  }
}

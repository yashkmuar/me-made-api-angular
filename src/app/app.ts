import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Users } from './service/users';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('jsonserver-api-angular');
  users:User[]=[];
  constructor(private userService:Users){

  }
  ngOnInit(){
    this.userService.getUsers().subscribe((data:User[]) => {
      this.users=data;
      console.log(this.users);
    });
  }
}

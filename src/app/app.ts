import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Users } from './service/users';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('jsonserver-api-angular');
  users:any;
  constructor(private userService:Users){

  }
  ngOnInit(){
    this.userService.getUsers().subscribe((data:any) => {
      this.users=data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';

@Component({
  selector: 'app-layout-inheritance',
  templateUrl: './layout-inheritance.component.html',
  styleUrls: ['./layout-inheritance.component.css']
})
export class LayoutInheritanceComponent implements OnInit {

  users: User[] = [
    {
      firstName: 'Geddy',
      lastName: 'Lee',
      email: 'geddy@rush.com',
    },
    {
      firstName: 'Neil',
      lastName: 'Peart',
      email: 'neil@rush.com',
    },
    {
      firstName: 'Alex',
      lastName: 'Lifeson',
      email: 'alex@rush.com',
    },
  ];

  constructor() { }

  ngOnInit() { }

  viewUser(user: User) {
    alert(JSON.stringify(user));
  }

}

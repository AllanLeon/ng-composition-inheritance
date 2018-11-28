import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';

@Component({
  selector: 'app-template-layout',
  templateUrl: './template-layout.component.html',
  styleUrls: ['./template-layout.component.css']
})
export class TemplateLayoutComponent implements OnInit {

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

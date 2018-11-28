import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models';

@Component({
  selector: 'app-multiple-templates',
  templateUrl: './multiple-templates.component.html',
  styleUrls: ['./multiple-templates.component.css']
})
export class MultipleTemplatesComponent implements OnInit {

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

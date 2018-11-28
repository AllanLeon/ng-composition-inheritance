import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from 'src/app/models';

@Component({
  selector: 'app-user-base-layout',
  template: '',
  styleUrls: ['./user-base-layout.component.css']
})
export class UserBaseLayoutComponent implements OnInit {

  @Input() users: User[] = [];
  @Output() view = new EventEmitter<User>();

  heading = 'Users';

  constructor() { }

  ngOnInit() { }

  viewUser(user: User) {
    this.view.emit(user);
  }

}

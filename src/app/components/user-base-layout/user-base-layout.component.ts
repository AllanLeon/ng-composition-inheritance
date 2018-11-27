import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models';

@Component({
  selector: 'app-user-base-layout',
  template: '',
  styleUrls: ['./user-base-layout.component.css']
})
export class UserBaseLayoutComponent {

  @Input() users: User[] = [];
  @Output() select = new EventEmitter<User>();

  heading = 'Users';

  viewUser(user: User) {
    this.select.emit(user);
  }

}

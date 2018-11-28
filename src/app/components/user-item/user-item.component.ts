import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models';

export type UserItemType = 'list' | 'table';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user: User;
  @Input() type: UserItemType;
  @Output() view = new EventEmitter<User>();

  constructor() { }

  ngOnInit() { }

  viewUser() {
    this.view.emit(this.user);
  }

}

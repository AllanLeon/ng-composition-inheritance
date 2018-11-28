import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models';

@Component({
  selector: 'app-user-base-item',
  template: '',
  styleUrls: ['./user-base-item.component.css']
})
export class UserBaseItemComponent implements OnInit {

  @Input() user: User;
  @Output() view = new EventEmitter<User>();

  constructor() { }

  ngOnInit() { }

  viewUser() {
    this.view.emit(this.user);
  }

}

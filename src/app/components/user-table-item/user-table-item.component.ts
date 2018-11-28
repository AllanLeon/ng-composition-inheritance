import { Component, OnInit } from '@angular/core';
import { UserBaseItemComponent } from '../user-base-item/user-base-item.component';

@Component({
  selector: 'app-user-table-item',
  template: `
    <div class="user-table__item">
      <div>{{user.firstName}}</div>
      <div>{{user.lastName}}</div>
      <div>{{user.email}}</div>
      <div><button (click)="viewUser(user)">View</button></div>
    </div>
  `,
  styles: [`
    .user-table__item {
      display: flex;
      flex-direction: row;
    }

    .user-table__item>div {
      width: 150px;
    }
  `],
})
export class UserTableItemComponent extends UserBaseItemComponent {

}

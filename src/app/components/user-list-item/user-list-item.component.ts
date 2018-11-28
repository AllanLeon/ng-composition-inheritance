import { Component, OnInit } from '@angular/core';
import { UserBaseItemComponent } from '../user-base-item/user-base-item.component';

@Component({
  selector: 'app-user-list-item',
  template: `
    <div class="user-list-item">
      {{user.firstName}} {{user.lastName}} <br>
      {{user.email}} <br>
      <button (click)="viewUser()">View</button>
    </div>
  `,
  styles: [`
    .user-list-item {
      position: relative;
      margin-left: 20px;
    }

    .user-list-item:before {
      content: "\u2219";
      position: absolute;
      left: -20px;
      top: -12px;
      font-size: 32px;
    }
  `]
})
export class UserListItemComponent extends UserBaseItemComponent {

}

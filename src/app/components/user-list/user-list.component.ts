import { Component } from '@angular/core';
import { UserBaseLayoutComponent } from '../user-base-layout/user-base-layout.component';

@Component({
  selector: 'app-user-list',
  template: `
    <b>{{heading}}</b>
    <ul>
      <li *ngFor="let user of users">
        {{user.firstName}} {{user.lastName}} <br>
        {{user.email}} <br>
        <button (click)="viewUser(user)">View</button>
      </li>
    </ul>
  `,
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent extends UserBaseLayoutComponent {
  heading = 'User list';
}

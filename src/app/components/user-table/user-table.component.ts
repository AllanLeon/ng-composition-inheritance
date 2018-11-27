import { Component } from '@angular/core';
import { UserBaseLayoutComponent } from '../user-base-layout/user-base-layout.component';

@Component({
  selector: 'app-user-table',
  template: `
    <b>{{heading}}</b>
    <table>
      <tr>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Email</td>
      </tr>
      <tr *ngFor="let user of users">
        <td>{{user.firstName}}</td>
        <td>{{user.lastName}}</td>
        <td>{{user.email}}</td>
        <td><button (click)="viewUser(user)">View</button></td>
      </tr>
    </table>
  `,
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent extends UserBaseLayoutComponent { }

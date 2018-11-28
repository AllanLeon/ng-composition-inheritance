import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-table-header',
  template: `
    <div class="user-table__header">
      <div>First Name</div>
      <div>Last Name</div>
      <div>Email</div>
    </div>
  `,
  styles: [`
    .user-table__header {
      display: flex;
      flex-direction: row;
    }

    .user-table__header>div {
      width: 150px;
    }
  `],
})
export class UserTableHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}

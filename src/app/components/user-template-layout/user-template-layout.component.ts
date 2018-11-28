import { Component, Input, Output, EventEmitter, OnInit, ContentChild, TemplateRef } from '@angular/core';
import { User } from 'src/app/models';
import { NgForOfContext } from '@angular/common';

@Component({
  selector: 'app-user-template-layout',
  templateUrl: './user-template-layout.component.html',
  styleUrls: ['./user-template-layout.component.css']
})
export class UserTemplateLayoutComponent implements OnInit {

  @Input() users: User[] = [];
  @Input() heading = 'Users';

  @ContentChild(TemplateRef) userTemplate: TemplateRef<NgForOfContext<User>>;

  constructor() { }

  ngOnInit() { }

}

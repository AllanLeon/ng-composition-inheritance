import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserBaseLayoutComponent } from './components/user-base-layout/user-base-layout.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { LayoutInheritanceComponent } from './layouts/layout-inheritance/layout-inheritance.component';
import { UserTemplateLayoutComponent } from './components/user-template-layout/user-template-layout.component';
import { TemplateLayoutComponent } from './layouts/template-layout/template-layout.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { UserBaseItemComponent } from './components/user-base-item/user-base-item.component';
import { UserTableItemComponent } from './components/user-table-item/user-table-item.component';
import { UserTableHeaderComponent } from './components/user-table-header/user-table-header.component';

@NgModule({
  declarations: [
    AppComponent,
    UserBaseLayoutComponent,
    UserListComponent,
    UserTableComponent,
    LayoutInheritanceComponent,
    UserTemplateLayoutComponent,
    TemplateLayoutComponent,
    UserListItemComponent,
    UserBaseItemComponent,
    UserTableItemComponent,
    UserTableHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

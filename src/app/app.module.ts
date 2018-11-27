import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserBaseLayoutComponent } from './components/user-base-layout/user-base-layout.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { LayoutInheritanceComponent } from './layouts/layout-inheritance/layout-inheritance.component';

@NgModule({
  declarations: [
    AppComponent,
    UserBaseLayoutComponent,
    UserListComponent,
    UserTableComponent,
    LayoutInheritanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

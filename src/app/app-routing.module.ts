import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutInheritanceComponent } from './layouts/layout-inheritance/layout-inheritance.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'layoutInheritance',
  },
  {
    path: 'layoutInheritance',
    component: LayoutInheritanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutInheritanceComponent } from './layouts/layout-inheritance/layout-inheritance.component';
import { TemplateLayoutComponent } from './layouts/template-layout/template-layout.component';
import { MultipleTemplatesComponent } from './layouts/multiple-templates/multiple-templates.component';

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
  {
    path: 'templateLayout',
    component: TemplateLayoutComponent,
  },
  {
    path: 'multipleTemplates',
    component: MultipleTemplatesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

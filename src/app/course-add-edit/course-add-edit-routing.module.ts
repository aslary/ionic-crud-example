import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseAddEditPage } from './course-add-edit.page';

const routes: Routes = [
  {
    path: '',
    component: CourseAddEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseAddEditPageRoutingModule {}

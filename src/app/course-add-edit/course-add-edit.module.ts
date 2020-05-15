import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseAddEditPageRoutingModule } from './course-add-edit-routing.module';

import { CourseAddEditPage } from './course-add-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseAddEditPageRoutingModule
  ],
  declarations: [CourseAddEditPage]
})
export class CourseAddEditPageModule {}

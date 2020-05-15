import { Component, OnInit, Input } from '@angular/core';
import { Course, MockDataService } from 'src/mock/data';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-course-add-edit',
  templateUrl: './course-add-edit.page.html',
  styleUrls: ['./course-add-edit.page.scss'],
})
export class CourseAddEditPage {

  @Input() id: number;
  isEditMode: boolean;
  course: Course = new Course();

  constructor(
    public mockDataService: MockDataService,
    public modalController: ModalController
  ) { }

  ionViewWillEnter() {
    this.isEditMode = this.id !== undefined;
    if (this.isEditMode) {
      this.course = JSON.parse(JSON.stringify(this.mockDataService.findCourseById(this.id)));
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

  addOrEdit() {
    if (this.isEditMode) {
      this.mockDataService.updateCourse(this.course);
    } else {
      this.mockDataService.addCourse(this.course);
    }
    this.dismiss();
  }

}

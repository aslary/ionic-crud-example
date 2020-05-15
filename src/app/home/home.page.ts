import { Component } from '@angular/core';
import { Course, courses, MockDataService } from 'src/mock/data';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { CourseAddEditPage } from '../course-add-edit/course-add-edit.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  courses: Course[];

  constructor(
    public mockDataService: MockDataService,
    public modalController: ModalController,
    public routerOutlet: IonRouterOutlet
  ) {}

  ionViewWillEnter() {
    this.courses = courses;
  }

  deleteCourse(course: Course) {
    this.mockDataService.deleteCourseWithAlert(course);
  }

  async addCourse() {
    let modal = await this.modalController.create({
      component: CourseAddEditPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    await modal.present();
  }
}

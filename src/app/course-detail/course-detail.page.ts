import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, MockDataService } from 'src/mock/data';
import { CourseAddEditPage } from '../course-add-edit/course-add-edit.page';
import { ModalController, IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
})
export class CourseDetailPage {

  course: Course;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public mockDataService: MockDataService,
    public modalController: ModalController,
    public routerOutlet: IonRouterOutlet
  ) { }

  ionViewWillEnter() {
    this.course = this.mockDataService.findCourseById(+this.route.snapshot.params.id);
  }

  async deleteCourse() {
    let alert = await this.mockDataService.deleteCourseWithAlert(this.course);
    alert.onDidDismiss().then(eventData => {
      if (eventData.role === 'delete')
        this.router.navigateByUrl('home');
    });
  }

  async editCourse() {
    let modal = await this.modalController.create({
      component: CourseAddEditPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: {
        'id': this.course.id
      }
    });

    await modal.present();

    modal.onDidDismiss().then(eventData => {
      this.ionViewWillEnter();
    });
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseAddEditPage } from './course-add-edit.page';

describe('CourseAddEditPage', () => {
  let component: CourseAddEditPage;
  let fixture: ComponentFixture<CourseAddEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAddEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseAddEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

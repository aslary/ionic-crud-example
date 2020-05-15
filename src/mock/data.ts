import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

class Course {
    id: number;
    title: string;
    description: string;
    creationDate: string; // ISO to make it work with <ion-datetime>
    duration: number; // in hours
}

var courses: Course[] = [
    {
        id: 1,
        title: 'Learn JavaEE',
        description: 'Learn how to create enterprise level applications with Java EE and all its specifications, such as JPA, Servlets, EJB, JAX-RS and many more.',
        creationDate: new Date().toISOString(),
        duration: 35
    },
    {
        id: 2,
        title: 'The guide to Spring Boot',
        description: 'Learn how to create enterprise level applications with Spring Boot and how this framework follows a different approach than JavaEE. Also, you will learn that Spring still uses many parts of the JavaEE specification.',
        creationDate: new Date().toISOString(),
        duration: 28
    },
    {
        id: 3,
        title: 'Machine Learning and Deep Learning',
        description: 'Python is a great and simple language, mostly used in the field of Data Science and AI. In this course you will learn how to create your own Machine Learning models, to e.g. predict events in the future. Later on in this course, we will also dive into Deep Learning and neural networks (with all its types such as CNN, ANN, etc.).',
        creationDate: new Date().toISOString(),
        duration: 18
    },
    {
        id: 4,
        title: 'Create hybrid mobile apps with Ionic (Angular)',
        description: 'You want to create beautiful and native looking mobile and web apps with only one codebase without touching the native SDKs? Well, this course has got your back. We will cover the basics of Angular and TypeScript, and later on dive deep into Ionic.',
        creationDate: new Date().toISOString(),
        duration: 15
    },
    {
        id: 5,
        title: 'mock',
        description: 'mock',
        creationDate: new Date().toISOString(),
        duration: 15
    },
    {
        id: 6,
        title: 'mock',
        description: 'mock',
        creationDate: new Date().toISOString(),
        duration: 15
    },
    {
        id: 7,
        title: 'mock',
        description: 'mock',
        creationDate: new Date().toISOString(),
        duration: 15
    },
    {
        id: 8,
        title: 'mock',
        description: 'mock',
        creationDate: new Date().toISOString(),
        duration: 15
    },
    {
        id: 9,
        title: 'mock',
        description: 'mock',
        creationDate: new Date().toISOString(),
        duration: 15
    },
    {
        id: 10,
        title: 'mock',
        description: 'mock',
        creationDate: new Date().toISOString(),
        duration: 15
    },
    {
        id: 11,
        title: 'mock',
        description: 'mock',
        creationDate: new Date().toISOString(),
        duration: 15
    },
    {
        id: 12,
        title: 'mock',
        description: 'mock',
        creationDate: new Date().toISOString(),
        duration: 15
    },
    {
        id: 13,
        title: 'mock',
        description: 'mock',
        creationDate: new Date().toISOString(),
        duration: 15
    },
    {
        id: 14,
        title: 'mock',
        description: 'mock',
        creationDate: new Date().toISOString(),
        duration: 15
    }
];

@Injectable({
    providedIn: 'root'
})
class MockDataService {

    constructor(
        public alertController: AlertController,
        public toastController: ToastController
    ) { }

    addCourse(course: Course): void {
        course.id = this.getHighestCourseId() + 1;
        courses.push(course);
        this.displayToast('Course created successfully');
    }

    getHighestCourseId(): number {
        return Math.max(...courses.map(c => c.id));
    }

    findCourseById(id: number): Course {
        let foundCourses = courses.filter(c => c.id === id);
        return foundCourses.length === 0 ? null : foundCourses[0];
    }

    updateCourse(course: Course) {
        let saved = this.findCourseById(course.id);
        courses[courses.indexOf(saved)] = course;
        this.displayToast('Course updated successfully');
    }

    deleteCourse(course: Course) {
        courses.splice(courses.indexOf(course), 1);
        this.displayToast('Course deleted successfully');
    }

    private async displayToast(msg: string) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2500
        });
        await toast.present();
    }

    async deleteCourseWithAlert(course: Course) {
        const alert = await this.alertController.create({
            header: 'Warning',
            message: `Are you sure you want to delete your course <strong><i>${course.title}</i></strong>?`,
            buttons: [
                'Cancel',
                {
                    text: 'Delete',
                    handler: () => {
                        this.deleteCourse(course);
                    }
                },
            ]
        });
        await alert.present();
        return alert;
    }
}

export { courses, Course, MockDataService };
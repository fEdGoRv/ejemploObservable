import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[]= [{
    nombre: 'Enrique',
    apellido: 'Garcia',
    edad: 28,
    img: 'https://i.pinimg.com/474x/2e/ee/06/2eee0661f0f9f06a95a8fd35269f2b0e--kung-fu-panda-animation.jpg',
    email: 'enrique****@gmail.com',
    contrasena: 'asd147'
}, {
    nombre: 'Pablo',
    apellido: 'Armando',
    edad: 32,
    img: 'https://i.pinimg.com/originals/91/9a/cf/919acf23833d02bf647dccf7cf177eae.png',
    email: 'pablin@gmail.com',
    contrasena: 'asd123'
}, {
    nombre: 'Julio',
    apellido: 'Blanco',
    edad: 34,
    img: 'https://i.pinimg.com/236x/97/15/0e/97150e0166fc22a4557efcbc3fe479cc--kung-fu-panda--pandas.jpg',
    email: 'julioasd2@gmail.com',
    contrasena: 'asd789'
}, {
    nombre: 'Omar',
    apellido: 'Salvadot',
    edad: 48,
    img: 'https://image.jimcdn.com/app/cms/image/transf/dimension=210x1024:format=png/path/s39145781b4b2fa7a/image/i8e80b058a09cb1e3/version/1474202594/image.png',
    email: 'Omarsito@gmail.com',
    contrasena: 'asd456'
}];

  students$: Observable<Student[]>;

  constructor() {
    this.students$ = new Observable<Student[]>((suscriptor) => {suscriptor.next(this.students)})
   
  }

  getStudentsPromise() : Promise<Student[] | any>{
    return new Promise((resolve, reject)=>{
      if (this.students.length>0){
        resolve (this.students)
      }else{
        reject({
          codigo: 0,
          mensaje: `there's no student inscripted in this curse`
        });
      }
    })
  }

  getStudentObservable() {
    return this.students$
   }
}
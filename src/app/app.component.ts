import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, of } from 'rxjs';
import { StudentService } from './components/student.service';
import { Student } from './models/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  students!:Student[];
  students$!: Observable<Student[]>;
  promise: any;
  suscription: any;
  

  constructor (
    private studentService : StudentService
  ){
    this.promise = studentService.getStudentsPromise()


    this.suscription = studentService.getStudentObservable().subscribe({
      next:(students : Student[]) => {this.students= students}
    })
    this.students$ = studentService.getStudentObservable();
  

  }
  

  ngOnInit():void{
    of(this.students).pipe(
      map((students: Student[]) => students.filter((student: Student) => student.nombre === 'Julio')))
      .subscribe((students) => {
   console.log('Desde el of: ', students);
  });

    of(this.students).subscribe((students)=>console.log('desde el of ', students));
  }


  ngOnDestroy(): void {
    //this.suscription.unsubscribe();
  }
}

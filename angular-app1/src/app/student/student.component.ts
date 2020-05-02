import { Router } from '@angular/router';
import { Student } from './../_model/student';
import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../_services/student-service.service';
import { StringDecoder } from 'string_decoder';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
})
export class StudentComponent implements OnInit {
  constructor(public stdser: StudentServiceService, private route: Router) {
    console.log('inside constructor');
  }
  students: Student[];
  ngOnInit(): void {
    this.stdser.getStudents().subscribe((data) => {
      console.log(data);

      this.students = data;
    });
  }
  onDelete(id: number) {
    this.stdser.deleteStudent(id).subscribe((res) => {
      this.route.navigateByUrl('/student');
    });
  }
}

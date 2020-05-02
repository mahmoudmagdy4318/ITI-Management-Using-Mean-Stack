import { DepartmentService } from './../_services/department.service';
import { Department } from './../_model/departments';
import { Student } from './../_model/student';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StudentServiceService } from '../_services/student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
})
export class AddStudentComponent implements OnInit {
  constructor(
    public stdserv: StudentServiceService,
    private route: Router,
    private deser: DepartmentService
  ) {}

  ngOnInit(): void {
    this.deser.getDepartments().subscribe((data) => {
      this.deps = data;
    });
  }

  student: Student = new Student();
  deps: Department[];
  onaddSaved() {
    console.log(this.student);
    this.stdserv
      .addStudent(this.student)
      .subscribe((data) => this.route.navigateByUrl('/student'));
  }
}

import { DepartmentService } from './../_services/department.service';
import { Department } from './../_model/departments';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from './../_model/student';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StudentServiceService } from '../_services/student-service.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
})
export class EditStudentComponent implements OnInit {
  std: Student = new Student();
  id: string;
  deps: Department[];
  constructor(
    public stdserv: StudentServiceService,
    private route: Router,
    private activeRoute: ActivatedRoute,
    private depserv: DepartmentService
  ) {}
  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.stdserv.getSpecificStudent(this.id).subscribe((data) => {
      this.std = data;
    });
    this.depserv.getDepartments().subscribe((data) => {
      this.deps = data;
    });
  }

  onsubmitEditing() {
    this.stdserv.editStudent(this.id, this.std).subscribe((data) => {
      this.route.navigateByUrl('/student');
    });
  }
}

import { StudentServiceService } from './../_services/student-service.service';
import { Student } from './../_model/student';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
})
export class StudentDetailsComponent implements OnInit {
  student: Student = new Student();
  constructor(
    private stdserv: StudentServiceService,
    private activeRoute: ActivatedRoute
  ) {}
  onCloseDetails() {}
  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.stdserv.getSpecificStudent(id).subscribe((data) => {
      this.student = data;
    });
  }
}

import { Router } from '@angular/router';
import { DepartmentService } from './../_services/department.service';
import { Department } from './../_model/departments';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
})
export class AddDepartmentComponent implements OnInit {
  dep: Department = new Department();

  constructor(public depserv: DepartmentService, private route: Router) {}

  ngOnInit(): void {}

  onSaveDepartment() {
    this.depserv.addDepartment(this.dep).subscribe((data) => {
      this.route.navigateByUrl('/department');
    });
  }
}

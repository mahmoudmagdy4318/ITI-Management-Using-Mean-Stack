import { Router } from '@angular/router';
import { DepartmentService } from './../_services/department.service';
import { Department } from './../_model/departments';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
})
export class DepartmentComponent implements OnInit {
  constructor(public depserv: DepartmentService, private route: Router) {}

  Departments: Department[];
  ngOnInit(): void {
    this.depserv.getDepartments().subscribe((data) => {
      this.Departments = data;
    });
  }
  onDelete(id: string) {
    this.depserv.deleteDepartment(id).subscribe((d) => {
      this.route.navigateByUrl('/department');
    });
  }

  showDetails(i: number) {}

  addDepartment() {}

  hideDetails() {}

  onaddSaved() {}

  onEdit(index: number) {}

  submitEditing() {}
}

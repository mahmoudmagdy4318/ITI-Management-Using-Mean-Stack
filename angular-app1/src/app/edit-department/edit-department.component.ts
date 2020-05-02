import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from './../_services/department.service';
import { Department } from './../_model/departments';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
})
export class EditDepartmentComponent implements OnInit {
  dep: Department = new Department();
  id: string;
  constructor(
    public depserv: DepartmentService,
    private activeRouter: ActivatedRoute,
    private route: Router
  ) {}
  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.paramMap.get('id');
    this.depserv.getSpecifiedDep(this.id).subscribe((data) => {
      this.dep = data;
    });
  }

  onsubmitEditing() {
    this.depserv.editDepartment(this.id, this.dep).subscribe((data) => {
      this.route.navigateByUrl('/department');
    });
  }
}

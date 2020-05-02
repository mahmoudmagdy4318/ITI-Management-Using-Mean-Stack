import { Department } from './../_model/departments';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
})
export class DepartmentDetailsComponent implements OnInit {
  @Input('dep') department: Department;
  @Output() hide: EventEmitter<void>;
  constructor() {
    this.hide = new EventEmitter<void>();
  }
  onCloseDetails() {
    this.hide.emit();
  }
  ngOnInit(): void {}
}

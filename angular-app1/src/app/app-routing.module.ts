import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DepartmentComponent } from './department/department.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {
    path: 'student',
    component: StudentComponent,
    children: [
      { path: 'details/:id', component: StudentDetailsComponent },
      { path: 'edit/:id', component: EditStudentComponent },
      { path: 'add', component: AddStudentComponent },
    ],
  },

  {
    path: 'department',
    component: DepartmentComponent,
    children: [
      { path: 'add', component: AddDepartmentComponent },
      { path: 'edit/:id', component: EditDepartmentComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

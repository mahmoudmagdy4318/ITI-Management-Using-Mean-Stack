import { HttpClient } from '@angular/common/http';
import { Department } from './../_model/departments';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  basicUrl = 'http://localhost:8080/Departments/';
  public getDepartments() {
    return this.http.get<Department[]>(this.basicUrl + 'list');
  }

  public addDepartment(dep: Department) {
    return this.http.post<Department>(this.basicUrl + 'add', dep);
  }

  public editDepartment(id: string, dep: Department) {
    return this.http.post<Department>(this.basicUrl + 'edit/' + id, dep);
  }

  public deleteDepartment(id: string) {
    return this.http.get(this.basicUrl + 'delete/' + id);
  }

  public getSpecifiedDep(id: string) {
    return this.http.get<Department>(this.basicUrl + 'details/' + id);
  }
  constructor(private http: HttpClient) {}
}

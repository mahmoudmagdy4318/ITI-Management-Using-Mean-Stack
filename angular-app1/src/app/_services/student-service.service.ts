import { Student } from './../_model/student';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentServiceService {
  private students: Student[] = [];

  private baseUrl = 'http://localhost:8080/Students/';

  public getStudents() {
    return this.http.get<Student[]>(this.baseUrl + 'list');
  }

  public addStudent(std: Student) {
    return this.http.post<Student>(this.baseUrl + 'add', std);
  }

  public getSpecificStudent(id: string) {
    return this.http.get(this.baseUrl + 'details/' + id);
  }
  public editStudent(id: string, std: Student) {
    return this.http.post<Student>(this.baseUrl + 'edit/' + id, std);
  }

  public deleteStudent(id: number) {
    return this.http.get(this.baseUrl + 'delete/' + id);
  }

  constructor(private http: HttpClient) {}
}

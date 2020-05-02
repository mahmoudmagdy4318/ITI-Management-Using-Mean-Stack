import { Department } from './departments';
export class Student {
  constructor(
    public _id?: number,
    public Name?: string,
    public Email?: string,
    public Department?: Department
  ) {}
}

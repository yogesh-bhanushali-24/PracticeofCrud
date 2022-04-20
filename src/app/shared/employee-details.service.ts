import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDetails } from './employee-details.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {
  constructor(private http:HttpClient) { }
  list:EmployeeDetails[]=[];
  Employeedata:EmployeeDetails=new EmployeeDetails();
  readonly baseURL='https://localhost:44360/api/Employee';

  GetAllData():Observable<EmployeeDetails[]>
  {
      return this.http.get<EmployeeDetails[]>(this.baseURL);
  }

  AddEmployee()
  {
    return this.http.post(this.baseURL,this.Employeedata);
  }

  UpdateEmployee()
  {
    return this.http.put(`${this.baseURL}/${this.Employeedata.id}`,this.Employeedata);
  }

  DeleteEmployee(id:number)
  {
    return this.http.delete(`${this.baseURL}/${id}`)
  }

}

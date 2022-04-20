import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeDetails } from 'src/app/shared/employee-details.model';
import { EmployeeDetailsService } from 'src/app/shared/employee-details.service';

@Component({
  selector: 'app-employee-details-form',
  templateUrl: './employee-details-form.component.html',
  styleUrls: ['./employee-details-form.component.css']
})
export class EmployeeDetailsFormComponent implements OnInit {

  constructor(public service:EmployeeDetailsService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
    if(this.service.Employeedata.id==0)
    {
      this.Insert(form);
    }
    else
    {
      this.Update(form);
    }
  }

  Insert(form:NgForm)
  {
    form.value.isMarried=Number(form.value.isMarried);
    form.value.isActive=Number(form.value.isActive);

      this.service.Employeedata=form.value;
      this.service.AddEmployee().subscribe(d=>{
        this.service.GetAllData().subscribe(d=>this.service.list=d),
        this.resetForm(form),
        alert('data insert successfully')
      })
  }



  Update(form:NgForm)
  {
      this.service.Employeedata=form.value;
      this.service.UpdateEmployee().subscribe(d=>{
        this.service.GetAllData().subscribe(d=>this.service.list=d),
        this.resetForm(form),
        alert('data update successfully')
      })
  }

  resetForm(form:NgForm)
  {
    form.form.reset();
    this.service.Employeedata=new EmployeeDetails();

  }

}

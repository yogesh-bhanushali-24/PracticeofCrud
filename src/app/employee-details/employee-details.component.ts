import { Component, OnInit } from '@angular/core';
import { EmployeeDetails } from '../shared/employee-details.model';
import { EmployeeDetailsService } from '../shared/employee-details.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  Searchname:any;
  constructor(public service:EmployeeDetailsService) { }

  ngOnInit(): void {
    this.service.GetAllData().subscribe(d=>this.service.list=d)
  }

  onDelete(id:number)
  {
    if(confirm('Are You Want To delete ?'))
    {
    this.service.DeleteEmployee(id).subscribe(d=>{
      this.service.GetAllData().subscribe(d=>this.service.list=d);
      
    })
    }
  }

  populateForm(selectedRecord:EmployeeDetails) 
  {
    this.service.Employeedata=Object.assign({},selectedRecord);
  }

  Search()
  {
    if(this.Searchname==''){
      this.ngOnInit()
    }
    else
    {
      this.service.list=this.service.list.filter(res=>
      {
          return res.name.toLocaleLowerCase().match(this.Searchname.toLocaleLowerCase());
      })
    }

  }

}

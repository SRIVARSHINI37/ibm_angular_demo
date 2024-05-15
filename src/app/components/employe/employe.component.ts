import { Component } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employe',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employe.component.html',
  styleUrl: './employe.component.css'
})
export class EmployeComponent {

  employeeId: string = '';
  empList: any;
  empData: any;

  constructor(private employeeService: EmployeeService) { }

  getAllEmps = () => {
    console.log('getAllEmps');
    this.employeeService.getAllEmployees()
      .subscribe({
        next: (response: any) => {
          console.log(response);
          this.empList = response;

          // code 
        },
        error: (error: any) => { console.error(error); }
      });
  }

  getEmpById = () => {
    console.log(this.employeeId);
    this.employeeService.getEmployeeById(this.employeeId)
      .subscribe({
        next: (response: any) => {
          console.log(response);
          this.empData = response;
          // code 
        },
        error: (error: any) => { console.error(error); }
      });
  };

}

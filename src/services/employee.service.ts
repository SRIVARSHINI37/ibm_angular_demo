import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private springbootUrl: string = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

  getAllEmployees = (): Observable<any> => {
    console.log('getAllEmployees');
    return this.http.get(`${this.springbootUrl}/emp/get-all-emps`);
  };

  getEmployeeById = (id: string): Observable<any> => {
    console.log('getAllEmployees', id);
    return this.http.get(`${this.springbootUrl}/emp/get-emp-by-id/${id}`);
  };
}

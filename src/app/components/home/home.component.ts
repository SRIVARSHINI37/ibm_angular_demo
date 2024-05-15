import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule , CommonModule , ChildComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{


  parentData = 'Sri varshini';
  childDataInParent : string | any;

  receiveData = (data: string | any) => {
    this.childDataInParent = data;
    console.log(this.childDataInParent);
    // code 
};
//   empList = [
//     { firstName: 'Sonu', salary: 10.50 },
//     { firstName: 'Monu', salary: 15.25 },
//     { firstName: 'Tonu', salary: 12.75 }
// ];

//   name : string = 'Sri varshini';
//   salary : number = 32000
//   isDisabled : boolean = true;

//   constructor(){
//     setTimeout(()=>{
//       this.isDisabled = false;
//     },2000);
//   }

//   increaseSalary = () => {
//     this.salary += 1000;
//   }

}

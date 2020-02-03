import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent  {

// submit(formData){
// console.log(formData);
// }

employeeModal = new Employee("Udhay",821457,"udhay@gmail.com","Angular Developer","male","I have 5yrs",true)

positions=["Angular Developer","Java Developer","Devops engineer"]
}

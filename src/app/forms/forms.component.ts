import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent  {

  positionError=true;
// submit(formData){
// console.log(formData);
// }

employeeModal = new Employee("",821457,"udhay@gmail.com","Angular Developer","male","I have 5yrs",true)

positions=["Angular Developer","Java Developer","Devops engineer","Linux admin"]


validatePosition(value){
  if(value=="default"){
    this.positionError=true
  }
  else{
    this.positionError=false
  }
  console.log(value)
}
}

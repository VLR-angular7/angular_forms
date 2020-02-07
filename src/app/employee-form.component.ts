import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';
import {employeeNameValidator} from '../employeename.validator'
@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  constructor(public fb:FormBuilder) { }

  ngOnInit() {
  }


  
  get employeeName() :any{ 
    return this.employeeForm.get('employeeName');
  }

  employeeForm=this.fb.group({
    employeeName:['',[Validators.required,Validators.minLength(5),employeeNameValidator(/venkat/,/mumbai/)]],
    employeeCompany:['']

  })


// employeeForm= new FormGroup({
//   employeeName: new FormControl(''),
//   employeeCompany: new FormControl(''),
//   address:new FormGroup({
//     city:new FormControl(''),
//     pincode: new FormControl('')
//   })
// })

submitData(){
  console.log(this.employeeForm);
}

// setData(){
//   this.employeeForm.patchValue({
//     address:{
//       city:"HYD",
//       pincode:500032
//     }

//   })
//   this.employeeForm.setValue({
//     address:{
//       city:"HYD",
//       pincode:500032
//     }

//   })
// }


}

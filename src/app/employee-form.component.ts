import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  constructor(public fb:FormBuilder) { }

  ngOnInit() {
  }

  employeeForm=this.fb.group({
    employeeName:['Srinivas',Validators.required],
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

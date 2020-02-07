import {FormControl, ValidatorFn} from '@angular/forms'


// export function employeeNameValidator(control:FormControl) : { [key:string]:any } | null  {
//     let userName= /admin/.test(control.value);
//     let userName2 =/venkat/.test(control.value)
//     return userName || userName2 ? {'userNameCheck':control.value} : null
// }


export function employeeNameValidator(name:RegExp,city:RegExp) : ValidatorFn {
    return (control:FormControl) : { [key:string]:any } | null => {
        console.log(name);
            let userName= name.test(control.value);
            let cityName= city.test(control.value);

            console.log(userName)
            return userName || city ? {'userNameCheck':control.value} : null
}
}
import { FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

export class PasswordValidator {

    static matchPassword(control: AbstractControl) {
        const password: string = control.get('password').value; // get password from our password form control
        const confirmPassword: string = control.get('repeatPassword').value; // get password from our confirmPassword form control
        if (confirmPassword) {
            if (password !== confirmPassword) {
                // if they don't match, set an error in our confirmPassword form control
                control.get('repeatPassword').setErrors({ NoPasswordMatch: true });
            }
        }
        
        return null;
    }

}

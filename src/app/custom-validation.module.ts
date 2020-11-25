import { FormGroup, FormControl, FormGroupDirective, NgForm, ValidatorFn, AbstractControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/**
 * Custom validator functions for reactive form validation
 */
export class CustomValidators {

    static atLeastOne: ValidatorFn = (formGroup: AbstractControl) => {
        let fNameEntered = (<FormGroup>formGroup).controls["firstName"].value !== '';
        let lNameEntered = (<FormGroup>formGroup).controls["lastName"].value !== '';
        let phoneEntered = (<FormGroup>formGroup).controls["phone"].value !== '';
        let emailEntered = (<FormGroup>formGroup).controls["email"].value !== '';
        if (fNameEntered || lNameEntered || phoneEntered || emailEntered) {
            return null;
        } else {
            return { atLeastOne: true };
        }
        var debug = true;

    }
}

/**
 * Custom ErrorStateMatcher which returns true (error exists) when the parent form group is invalid and the control has been touched
 */
export class ConfirmValidParentMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return (control!.parent!.invalid) && (form!.submitted);
    }
}

/**
 * Collection of reusable RegExps
 */
export const regExps: { [key: string]: RegExp } = {
    password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
};

/**
 * Collection of reusable error messages
 */
export const errorMessages: { [key: string]: string } = {
    atLeastOne: "Please enter at least one: 'Email', 'Phone', 'First Name' or 'Last Name'"
};
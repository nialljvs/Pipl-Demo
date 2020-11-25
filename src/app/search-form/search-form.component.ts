import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Person } from '../models/person/person';
import { Observable, of } from 'rxjs';
import { ConfirmValidParentMatcher, CustomValidators, errorMessages } from '../custom-validation.module';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.sass']
})
export class SearchFormComponent implements OnInit {

  submitted: boolean = false;

  confirmValidParentMatcher = new ConfirmValidParentMatcher();
  errors = errorMessages;

  myForm!: FormGroup;
  people!: Observable<Person[]>;
  readonly ROOT_URL = 'http://localhost:4200/api'

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      middleName: '',
      username: '',
      countryCode: '',
      stateCode: '',
      city: '',
      age: ''
    }, {
      validator: CustomValidators.atLeastOne
    });
    this.myForm.valueChanges.subscribe((c) => console.log(this.myForm.valid));
  }

  atLeastOne = (validator: ValidatorFn) => (
    group: FormGroup,
  ): ValidationErrors | null => {
    const hasAtLeastOne =
      group &&
      group.controls &&
      Object.keys(group.controls).some(k => !validator(group.controls[k]));

    return hasAtLeastOne ? null : { atLeastOne: true };
  };

  onSubmit() {
    this.submitted = true;
    if (this.myForm.valid) {
      let params = new HttpParams()
        .append("first_name", this.myForm.get("firstName")?.value)
        .append("last_name", this.myForm.get("lastName")?.value)
        .append("middle_name", this.myForm.get("middleName")?.value)
        .append("email", this.myForm.get("email")?.value)
        .append("phone", this.myForm.get("phone")?.value)
        .append("username", this.myForm.get("username")?.value)
        .append("age", this.myForm.get("age")?.value)
        .append("country", this.myForm.get("countryCode")?.value)
        .append("state", this.myForm.get("stateCode")?.value)
        .append("city", this.myForm.get("city")?.value)
        .append("key", "nkvg5xba40fjihy2nkl7tsm7");
      this.http.get<any>(this.ROOT_URL + '/search', { params }).subscribe(jsonObj => {
        var pp = jsonObj.hasOwnProperty('person') ? Array.of(jsonObj.person) : jsonObj!.possible_persons;
        var pa = <Person[]>pp;
        console.log(pa);
        // this.people = of((pa).filter(p => (p.names?.length || 0) > 0));
        this.people = of(pa);
        console.log(pp);
      });
    }
  }

  otherNames(person: Person) {
    return person.names.slice(1);
  }

}

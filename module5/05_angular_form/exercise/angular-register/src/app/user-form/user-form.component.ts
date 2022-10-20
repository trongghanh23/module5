import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;


  constructor() {
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      passwordGroup: new FormGroup({
        passwordFirst: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      }, this.checkPassword),
      country: new FormControl(),
      age: new FormControl('', this.checkAge18),
      gender: new FormControl(),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]),
    });

  }

  getValue() {
    console.log(this.userForm.value);
  }

  checkAge18(abstractControl: AbstractControl): any {
    const formYear = Number(abstractControl.value.substr(0, 4));
    const curYear = new Date().getFullYear();
    return curYear - formYear >= 18 ? null : {invalid18: true};
  }

  checkPassword(group: AbstractControl): any {
    const passwordCheck = group.value;
    return (passwordCheck.password === passwordCheck.confirmPassword ? null : {notSame: true});
  }

}

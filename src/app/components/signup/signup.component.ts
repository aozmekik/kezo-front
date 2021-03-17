import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    emailConfirm: new FormControl(''),
    password: new FormControl(''),
    passwordConfirm: new FormControl(''),
  });

  readonly months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'];

  readonly days: string[] = Array.from(Array(31), (_, index) => String(index + 1));

  checked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(): void {
    console.log(this.signupForm.value);
  }

  setChecked(event: boolean): void {
    this.checked = event;
  }
}

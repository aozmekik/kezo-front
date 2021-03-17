import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

// TODO. make checkbox component.

export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  orderForm = new FormGroup({
    number: new FormControl(''),
    email: new FormControl('')
  });
  rememberMe: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

  setChecked(event: boolean): void {
    this.rememberMe = event;
  }

}

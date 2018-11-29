import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { showFormError, showErrorInEmail } from '../shared/form-validators';

@Component({
  selector: 'app-user-form-login',
  templateUrl: './user-form-login.component.html',
  styleUrls: ['./user-form-login.component.scss']
})
export class UserFormLoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;
  keepSignIn = false;
  showFormError = showFormError;
  showErrorInEmail = showErrorInEmail;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  fieldKeyUp() {
    this.password.updateValueAndValidity();
    this.email.updateValueAndValidity();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submitLoginForm() {
    console.log('slider', this.keepSignIn);
    console.log('errors', this.loginForm.controls);
    console.log('submitLoginForm', this.loginForm.value);
  }

}

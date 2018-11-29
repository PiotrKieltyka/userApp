import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { showFormError, showErrorInEmail } from '../shared/form-validators';

@Component({
  selector: 'app-user-form-register',
  templateUrl: './user-form-register.component.html',
  styleUrls: ['./user-form-register.component.scss']
})

export class UserFormRegisterComponent implements OnInit {

  registerForm: FormGroup;
  hide = true;
  confirmHide = true;
  checkPrivacyPolicy = false;
  keepSingIn = false;
  showFormError = showFormError;
  showErrorInEmail = showErrorInEmail;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  fieldKeyUp() {
    this.firstName.updateValueAndValidity();
    this.lastName.updateValueAndValidity();
    this.email.updateValueAndValidity();
    this.password.updateValueAndValidity();
    this.confirmPassword.updateValueAndValidity();
  }

  submitSignUpForm() {
    console.log('private policy', this.checkPrivacyPolicy);
    console.log('slider', this.keepSingIn);
    console.log('errors', this.registerForm.errors);
    console.log('registerForm', this.registerForm);
  }

}

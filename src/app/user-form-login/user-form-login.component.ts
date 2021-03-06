import { catchError } from 'rxjs/operators';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { throwError  } from 'rxjs';
import { Router } from '@angular/router';

import { AuthService } from './../shared/auth.service';
import { showFormError, showEmailError } from '../shared/form-validators';

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
  showEmailError = showEmailError;
  @Output('userId') loggedUserId = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
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

  submitLoginForm() {
    const formValues = this.loginForm.value;
    if (formValues.email && formValues.password) {
      this.authService.signin(formValues.email, formValues.password)
      .pipe(
        catchError(err => throwError(err)
        )
      ).subscribe(
        res => {
          console.log('user is logged in', res._id);
          this.loggedUserId.emit(res._id);
          this.router.navigateByUrl('/home');
        });
    }
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

  // submitLoginForm() {
  //   console.log('slider', this.keepSignIn);
  //   console.log('errors', this.loginForm.controls);
  //   console.log('submitLoginForm', this.loginForm.value);
  // }

}

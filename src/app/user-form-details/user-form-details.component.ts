import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user-form-details',
  templateUrl: './user-form-details.component.html',
  styleUrls: ['./user-form-details.component.scss']
})

export class UserFormDetailsComponent implements OnInit {

  searchForm: FormGroup;
  userDetails;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.createForm();
  }

  getUserDetailsByEmail() {
    console.log('getUserDetails by email clicked');
    const formValues = this.searchForm.value;
    return this.http.post<any>(`http://localhost:3010/api/user`, formValues, this.addHeaders()).subscribe(
      (value) => {
        console.log('received value', value);
        this.userDetails = JSON.stringify(value);
      }
    );
  }

  getUserDetailsById() {
    console.log('getUserDetails by id clicked');
    const formValues = this.searchForm.value;
    return this.http.get<any>(`http://localhost:3010/api/user/${formValues.id}`, this.addHeaders()).subscribe(
      (value) => {
        console.log('received value', value);
        this.userDetails = JSON.stringify(value);
      }
    );
  }

  addHeaders() {
    const headers = new HttpHeaders();
    return {
      headers,
    };
  }

  createForm() {
    this.searchForm = this.fb.group({
      email: [''],
      id: ['']
    });
  }

}

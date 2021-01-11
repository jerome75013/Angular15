import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../email-validator';
import { passwordValidator } from '../password-validator';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user;

  userForm = this.fb.group({
    credentials: this.fb.group({
      email: ['', [Validators.required,Validators.email, emailValidator]],
      password: ['',[Validators.required, passwordValidator]]
    })
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}

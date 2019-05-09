import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  loginFormGroup = new FormGroup({
    username : new FormControl(''),
    password : new FormControl(''),
  })

 
  clearPass(){
    this.loginFormGroup.get('password').setValue('');
  }

}

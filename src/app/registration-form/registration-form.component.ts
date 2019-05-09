import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  visible = false;
  day = [];
  month=[];
  year=[];
  buttonRegister= true;
  constructor() { }

  formRegistrasi = new FormGroup({
    mobileNumber : new FormControl('',Validators.required),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email:new FormControl(''),
    day: new FormControl('day'),
    month: new FormControl('month'),
    year: new FormControl('year'),
    gender: new FormControl('')
  })

  dayContent(){
    for(let a=0;a<31;a++){
      this.day.push(a+1);
      if(a<12){
        this.month.push(a+1);
      }
    }
  }
  yearContent(){
    for(let a=2019;a>=1990;a--){
      this.year.push(a);
    }
  }

  disableForm(){
    this.formRegistrasi.get('mobileNumber').disable();
    this.formRegistrasi.get('firstName').disable();
    this.formRegistrasi.get('lastName').disable();
    this.formRegistrasi.get('email').disable();
    this.formRegistrasi.get('day').disable();
    this.formRegistrasi.get('month').disable();
    this.formRegistrasi.get('year').disable();
    this.formRegistrasi.get('gender').disable();
    this.buttonRegister = false;
  }

  save(){
    this.visible = true;
    this.disableForm();
    console.log('=========='+this.formRegistrasi.get("mobileNumber").value);
  }

  ngOnInit() {
    this.dayContent();
    this.yearContent();
  }

}

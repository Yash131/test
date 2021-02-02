
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MailerServiceService } from '../mailer-service.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],

})
export class RegistrationComponent implements OnInit {
  // onFileChanged(event:any) {
  //   const file = event.target.files[0]
  // }

  Registrationform: FormGroup;
  
 
  constructor(private fb: FormBuilder ,private  mailService : MailerServiceService) {
    this.Registrationform = this.fb.group({
      
      fname: [''],
      lname: [''],
      dob: [''],
      age:[''],
     
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-z]{2,}))$/)])],
      mobile: ['', Validators.compose([Validators.required, Validators.minLength(8),])],
      address:[''],
      city:[''],
      pincode:[''],
      photopath: [''],
      category:[''],
      landline:['']
    })


  }
  ngOnInit() { }
  
  sendMailTo(){
    console.log(this.Registrationform.value);

    this.mailService.sendMail(this.Registrationform.value).subscribe((res)=>{
      console.log(res);
    })
  }
}
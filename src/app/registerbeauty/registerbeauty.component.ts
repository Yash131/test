import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailerServiceService } from '../mailer-service.service';

@Component({
  selector: 'app-registerbeauty',
  templateUrl: './registerbeauty.component.html',
  styleUrls: ['./registerbeauty.component.css']
})
export class RegisterbeautyComponent implements OnInit {

  // onFileChanged(event:any) {
  //   const file = event.target.files[0]
  // }

  Registrationbeautyform: FormGroup;

  constructor(private fb: FormBuilder, private mailService : MailerServiceService) {
    this.Registrationbeautyform = this.fb.group({
      category:[''],
      marital:[''],
      fname: [''],
      lname: [''],
      dob: [''],
      age:[''],
      height:[''],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-z]{2,}))$/)])],
      mobile: ['', Validators.compose([Validators.required, Validators.minLength(8),])],
      address:[''],
      city:[''],
      pincode:[''],
      photopath: [''],
      landline:['']
    })


  }


  ngOnInit() {
  }
  sendMailTo(){
    console.log(this.Registrationbeautyform.value);

    this.mailService.sendMail(this.Registrationbeautyform.value).subscribe((res)=>{
      console.log(res);
    })
  }
}

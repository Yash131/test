import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailerServiceService {

  URL = 'https://nodemailer-script.herokuapp.com/'

  constructor(private http: HttpClient) { }

  sendMail(body){
    return this.http.post( this.URL, body)
  }
}

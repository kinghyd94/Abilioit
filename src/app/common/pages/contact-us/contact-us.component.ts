import { Component } from '@angular/core';
import { Slider } from './assistance/slider';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  email:  any;
  // mailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
  mailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';

  phonePattern = '^[0-9]{10}$';


  submit(form:any){
    var name = form.name;
    console.log(name);

    var email = form.email;
    console.log(email);

    var number = form.number;
    console.log(number);

    var subject = form.subject;
    console.log(subject);

    var message = form.message;
    console.log(message);
}



}

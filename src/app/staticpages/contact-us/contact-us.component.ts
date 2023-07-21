import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  loader: boolean=false;
  constructor(){
    this.loader=true
    setTimeout(() => {
      this.loader=false
    }, 1000);
  }
}

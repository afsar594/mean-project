import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {AccountserviceService} from '../accountservice.service';
import {Accountinfo} from '../accountinfo';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm: any;
  datasaved :boolean=false;
  massage:any;
  constructor(private formbuilder: FormBuilder, private accountservice: AccountserviceService) { }
 
  ngOnInit() {
    this.setFormState();
  }
  setFormState(): void {
    this.regForm = this.formbuilder.group({
       Name: ['', [Validators.required]],
       Email: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }
 
//   onSubmit() {
    
//     let userinfo = this.regForm.value;
// console.log("nnnnnnnnnn",userinfo);
//     this.createuserAccount(userinfo);
//     this.regForm.reset();
//   }
  createuserAccount() {
    this.accountservice.createaccount('register',this.regForm.value).subscribe(
      (res:any) => {
       console.log(res);
        this.datasaved = true;
        this.massage =res.message;
       this.regForm.reset();
      }
    )
  }
  getValue(){
    this.accountservice.getValue('getuser').subscribe((res)=>{
      console.log("response",res);
    })
  }
}

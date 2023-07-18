import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {AccountserviceService} from '../accountservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  datasaved = false;
  message: any;
  status:any;
 
  constructor(private formbuilder: FormBuilder, private accountservice: AccountserviceService,private router:Router) { }
 
  ngOnInit(): void {
    this.setFormState();
  }
  setFormState(): void {
    this.loginForm = this.formbuilder.group({
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }
 
  onSubmit() {
    
    let userinfo = this.loginForm.value;
    this.userLogin(userinfo);
    this.loginForm.reset();
  }
  userLogin(logininfo:any) {
    this.accountservice.userlogin('login',logininfo).subscribe(
      (resResult:any) => {
        console.log(resResult)
       let resp=JSON.stringify(resResult);
       console.log(resp);
        this.message = resResult.message
        this.status = resResult.success;
        if(resResult.success===true){
        localStorage.setItem('Loginuser',resp)
        this.router.navigateByUrl('/');
        }else{
          localStorage.removeItem('Loginuser');
        }
       this.loginForm.reset();
      }
    )
  }
 
}
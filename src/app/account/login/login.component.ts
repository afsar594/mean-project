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
  isLoading: boolean=false;
 loader:boolean=false
  constructor(private formbuilder: FormBuilder, private accountservice: AccountserviceService,private router:Router) { 
    this.loader=true
    setTimeout(() => {
      this.loader=false
    }, 1000);
  }
 
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
    this.isLoading=true
    let userinfo = this.loginForm.value;
    this.userLogin(userinfo);
    this.loginForm.reset();
  }
  userLogin(logininfo:any) {
setTimeout(() => {
  
  this.accountservice.userlogin('login',logininfo).subscribe(
    (resResult:any) => {
   if(resResult){
  this.isLoading=false
   }
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

}, 2000);

  
  }
 
}
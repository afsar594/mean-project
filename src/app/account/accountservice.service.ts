import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Accountinfo} from './accountinfo'
 
@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {
  url='http://localhost:3000'
  
headers = new HttpHeaders({
  // 'Content-Type': 'multipart/form-data',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
});
  constructor(private http:HttpClient) { }
  createaccount(url:any,accinfo:any){
   return this.http.post(`${this.url}/${url}`,accinfo,{headers:this.headers})

  }


  userlogin(url:any,accinfo:any){ 
    console.log("value in service",accinfo)
    return this.http.post(`${this.url}/${url}`,accinfo,{headers:this.headers})
  }


  getValue(url: string){
    return this.http.get(`${this.url}/${url}`,{headers:this.headers})
  }

}


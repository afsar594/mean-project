import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from  '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-project';
  loader: boolean=false;
  constructor(public router:Router,private api:HttpClient){
    this.loader=true
    setTimeout(() => {
      this.loader=false
    }, 1000);
  }

  



}
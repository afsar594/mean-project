import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  headers = new HttpHeaders({
    // 'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
  });
  constructor(private http :HttpClient) { }
  fileUpload(url:any,accinfo:any){ 
    return this.http.post(`${environment.API_URL}/${url}`,accinfo,{headers:this.headers})
  }
}

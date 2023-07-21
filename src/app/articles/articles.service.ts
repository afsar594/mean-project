import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environments';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http:HttpClient) { }
  getArticle(url:any){
  return  this.http.get(`${environment.API_URL}/${url}`)
  }
}

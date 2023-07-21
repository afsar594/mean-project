import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit  {
loader: boolean=false;
items:any;
constructor(private api:ArticlesService){
  this.loader=true
  setTimeout(() => {
    this.loader=false
  }, 1000);
}
ngOnInit() {
this.api.getArticle('getFile').subscribe((res)=>{
  this.items=res;
  console.log(res)
})
}
}

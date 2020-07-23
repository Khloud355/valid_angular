import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(public _http:HttpClient){

  }
  getNews():Observable<any>
  {
    return this._http.get("https://jsonplaceholder.typicode.com/posts");
  }


  users:object[]=[
{name:'ahmed', age:25, gender:'male',salary:111111},
{name:'ahmed', age:25, gender:'male',salary:111111},
{name:'ahmed', age:25, gender:'male',salary:111111},{name:'ahmed', age:25, gender:'male',salary:111111},{name:'ahmed', age:25, gender:'male',salary:111111}
  ]

}

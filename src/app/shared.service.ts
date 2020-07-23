import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(public _Http : HttpClient) {

   }

   getData () :Observable<any>{
    return this._Http.get("https://jsonplaceholder.typicode.com/posts")



  }

  users:object[] = 
[
  {name:'hassib',age:25, salary:65456, dateOfBirth:'1/1/1995'} ,
  {name:'Eman',age:85, salary:65456, dateOfBirth:'1/1/1901'} ,
  {name:'hassib',age:25, salary:65456, dateOfBirth:'1/1/1995'} ,
  {name:'Eman',age:85, salary:65456, dateOfBirth:'1/1/1901'} ,
  {name:'Ahmed',age:25, salary:65456, dateOfBirth:'1/1/1995'} ,
  {name:'ali',age:15, salary:65456, dateOfBirth:'8/1/1995'} ,
  {name:'sayed',age:26, salary:65456, dateOfBirth:'1/1/1995'} ,
  {name:'alaa',age:25, salary:65456, dateOfBirth:'1/1/1995'} , 
]
}

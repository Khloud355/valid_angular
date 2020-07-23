import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';
import {Doctor} from '../app/doctor'


@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private _http: HttpClient) {}
  
    getDoctors(){

return this._http.get<Doctor[]>(environment.usersUrl + 'doctors').pipe(map((res: any) => res.data))
    }
    // getDoctorsDetails(){

    //   return this._http.get<Doctor[]>(environment.usersUrl + 'doctors').pipe(map((res: any) => res.data.details))
    //       }

   
}

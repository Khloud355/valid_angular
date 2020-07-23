import { Component, OnInit } from '@angular/core';
// import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {DoctorsService} from '../doctors.service';
import {Doctor} from '../doctor';

@Component({
  selector: 'app-single-doctor',
  templateUrl: './single-doctor.component.html',
  styleUrls: ['./single-doctor.component.css']
})
export class SingleDoctorComponent implements OnInit {
  doctor:Doctor[]
  constructor(private _DoctorsService:DoctorsService) { }

  ngOnInit() {
    this._DoctorsService.  getDoctors().subscribe(data => {
      this.doctor = data
       console.log( this.doctor , "doctor")
     
    })
    
  }
}

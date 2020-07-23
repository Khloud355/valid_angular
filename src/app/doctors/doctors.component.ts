import { Component, OnInit } from '@angular/core';
import {DoctorsService} from '../doctors.service';
import {Doctor} from '../doctor';
import {DoctorDetails} from '../doctor'

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit{
 doctor:Doctor[]
 doctorr;

  constructor( private _DoctorsService:DoctorsService){
  
  }

  hyphenateUrlParams(str: string) {
    return str.split(' ').join('-')
  }
  getInstId(doc_id) {
    localStorage.setItem("curentDocId", doc_id)}
//     details(data){
// console.log(data.details.value.doctor_id , "khloud")
//     }
  title = 'OwlCarousel2 in Angular7 with Custom Navigation Arrows';

  // carouselOptions = {
  //   margin: 25,
  //   nav: true,
  //   navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
  //   responsiveClass: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //       nav: true
  //     },
  //     600: {
  //       items: 1,
  //       nav: true
  //     },
  //     1000: {
  //       items: 2,
  //       nav: true,
  //       loop: false
  //     },
  //     1500: {
  //       items: 3,
  //       nav: true,
  //       loop: false
  //     }
  //   }
  // }


  // images = [
  //   {
  //     text: "Everfresh Flowers",
  //     image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/1.jpg"
  //   },
  //   {
  //     text: "Festive Deer",
  //     image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/2.jpg"
  //   },
  //   {
  //     text: "Morning Greens",
  //     image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/3.jpg"
  //   },
  //   {
  //     text: "Bunch of Love",
  //     image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/4.jpg"
  //   },
  //   {
  //     text: "Blue Clear",
  //     image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg"
  //   },
  //   {
  //     text: "Evening Clouds",
  //     image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/7.jpg"
  //   },
  //   {
  //     text: "Fontains in Shadows",
  //     image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/8.jpg"
  //   },
  //   {
  //     text: "Kites in the Sky",
  //     image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/9.jpg"
  //   },
  //   {
  //     text: "Sun Streak",
  //     image: "https://freakyjolly.com/demo/jquery/PreloadJS/images/10.jpg"
  //   }
  // ]

  ngOnInit() {
    window.onload= function(){
      var khloud =document.getElementById("spa");
      document.body.style.overflow ="hidden";
  
  setTimeout(function(){
      khloud.style.display ="none";
      document.body.style.overflow ="auto";
  
  },3000);
  
  }
    this._DoctorsService.  getDoctors().subscribe(data => {
      this.doctor = data
       console.log( this.doctor , "doctor")
     
    })
  
    // this._DoctorsService.  getDoctorsDetails().subscribe(data => {
    //   this.doctorr = data.details
    //   console.log( this.doctorr , "doctor")
    // })
  }

}

  



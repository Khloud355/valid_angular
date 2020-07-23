import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';
import {RouterModule , Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DoctorsComponent } from './doctors/doctors.component';
import { SingleDoctorComponent } from './single-doctor/single-doctor.component';
const appRoutes:Routes  = []
;


@NgModule({
  declarations: [
    AppComponent,
   
    NavbarComponent,
    DoctorsComponent,
    SingleDoctorComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,OwlModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { SingleDoctorComponent } from './single-doctor/single-doctor.component';


const routes: Routes = [
  
    { path: '', component: DoctorsComponent  },
    {path: 'single-doctor/:id' , component : SingleDoctorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

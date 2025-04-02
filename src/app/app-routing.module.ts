import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CreatemployeeComponent } from './createmployee/createmployee.component';
import { AllemployeesComponent } from './allemployees/allemployees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent,children:[
  {path:'home',component:HomeComponent},
  {path:'createmployee',component:CreatemployeeComponent},
  {path:'allemployees',component:AllemployeesComponent},
  {path:'employee-details/:id',component:EmployeeDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllemployeesService } from '../allemployees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  id:number=0;
  allemployees:any='';
  constructor(private _activatedRoute:ActivatedRoute,private _allemployeesService:AllemployeesService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data);
        this.id=data.id;
        console.log(this.id);
      },(err:any)=>{
        alert('internal server error!');
      }
    )
    _allemployeesService.getAllemployees(this.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.allemployees=data;
      },(err:any)=>{
        alert('internal server error!');
      }
    )
  }

}

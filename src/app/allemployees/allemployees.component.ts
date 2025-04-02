import { Component } from '@angular/core';
import { AllemployeesService } from '../allemployees.service';

@Component({
  selector: 'app-allemployees',
  templateUrl: './allemployees.component.html',
  styleUrls: ['./allemployees.component.css']
})
export class AllemployeesComponent {
  term:string='';
  allemployeess:any=[];
  constructor(private _allemployeesService:AllemployeesService){
    _allemployeesService.getAllemployeess().subscribe(
      (data:any)=>{
        console.log(data);
        this.allemployeess=data;
      },(err:any)=>{
        alert('internel server error!');
      }
    )
    
  }
  map(){
    this.allemployeess=this.allemployeess.map((allemployees:any)=>{
      allemployees.package=allemployees.package+30000;
      return allemployees;
    })
  }
  delete(id:any){
    this._allemployeesService.deleteAllemployees(id).subscribe(
      (data:any)=>{
        alert('record deleted successfully!')
      },(err:any)=>{
        alert('internal server error!');
      },
    )
  }
  filter(){
    this._allemployeesService.getFilterdAllemployeess(this.term).subscribe(
      (data:any)=>{
        console.log(data);
        this.allemployeess=data;
      },(err:any)=>{
        alert('internal server error!');
      }
    )
  }
  column:string="";
  order:string='';
  sort(){
    this._allemployeesService.getSortedAllemployeess(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.allemployeess=data;
      },(err:any)=>{
        alert('internal server error!');
      }
    )
  }
  
 
  limit:string='';
  page:string='';
  pagination(){
    this._allemployeesService.getPaginatedAllemployeess(this.limit,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.allemployeess=data;
      },(err:any)=>{
        alert('internal server error!');
      }
    )
  }

}

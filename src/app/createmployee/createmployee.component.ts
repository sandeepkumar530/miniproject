import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createmployee',
  templateUrl: './createmployee.component.html',
  styleUrls: ['./createmployee.component.css']
})
export class CreatemployeeComponent {
  public employeeForm:FormGroup=new FormGroup({
    name:new FormControl(),
    company:new FormControl(),
    role:new FormControl(),
    package:new FormControl(),
    email:new FormControl(),
    dob:new FormControl(),
    address:new FormGroup({
      addressline:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl(),
     
      
    }),workmode:new FormControl(),
    hikes:new FormArray([]),
    // travelfee:new FormControl(),
    // wifibill:new FormControl(),
  })
  get hikesFormArray(){
    return this.employeeForm.get('hikes') as FormArray;

  }
  addhike(){
    this.hikesFormArray.push(
      
      new FormGroup({
        year:new FormControl(),
        percentage:new FormControl(),
      })
    )
  }
  deletehike(i:number){
    this.hikesFormArray.removeAt(i);
  }
  constructor(){
    this.employeeForm.get('workmode')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='workfromoffice'){
          this.employeeForm.addControl('travelfee',new FormControl());
          this.employeeForm.removeControl('wifibill');
        }else{
          this.employeeForm.addControl('wifibill',new FormControl());
          this.employeeForm.removeControl('travelfee');
        }
      }
    )
  }
  submit(){
    console.log(this.employeeForm);
  }
  

}

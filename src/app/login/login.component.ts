import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl(),
  })
constructor(private _loginServive:LoginService,private _router:Router){}
login(){
  console.log(this.loginForm.value);
this._loginServive.login(this.loginForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("login succesfull !");
      this._router.navigateByUrl('/dashboard');
    },(err:any)=>{
      alert("internal server error!")
    }
  )
}

}

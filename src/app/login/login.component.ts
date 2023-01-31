import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:FormGroup|any;
  constructor(private _http:HttpClient, private _route:Router) { }

  ngOnInit(): void {
    this.login = new FormGroup({
      'email': new FormControl(),
      'password': new FormControl()
    })
  }
  logindata(login:FormGroup){
    console.log(this.login.value);
    let loginForm = document.querySelector('#navbarSupportedContent');
    this._http.get<any>("http://localhost:3000/signup")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.login.value.email && a.password === this.login.value.password
      });

      if(user){
        alert('you are successfully login');
        localStorage.setItem('user',JSON.stringify(user));
        this.login.reset();
        this._route.navigate(['/home']);
      }else{
        alert('User Not Found');
        this._route.navigate(['/login']);
      
      }

    }, err=>{
      alert('Something was wrong');
    })

  }

  sbtn1(){
    $('.form-box').css('display','none');
    $('.form-box1').css('display','block');
  }

}
